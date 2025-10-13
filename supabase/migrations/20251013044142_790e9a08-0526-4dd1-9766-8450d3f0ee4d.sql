-- Create feedback table
CREATE TABLE public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on feedback
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Policies for feedback
CREATE POLICY "Users can submit their own feedback"
ON public.feedback
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own feedback"
ON public.feedback
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all feedback"
ON public.feedback
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create community messages table
CREATE TABLE public.community_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  user_name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS on community messages
ALTER TABLE public.community_messages ENABLE ROW LEVEL SECURITY;

-- Policies for community messages
CREATE POLICY "Authenticated users can view all messages"
ON public.community_messages
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can send messages"
ON public.community_messages
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Enable realtime for community messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.community_messages;