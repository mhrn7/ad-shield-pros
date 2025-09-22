-- Create contact_submissions table to store form data
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business TEXT NOT NULL,
  location TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact submissions (allow public insert, admin read)
CREATE POLICY "Allow public contact form submission" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow reading contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();