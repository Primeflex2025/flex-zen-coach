-- Add section column to trainer_videos table
ALTER TABLE public.trainer_videos 
ADD COLUMN IF NOT EXISTS section TEXT DEFAULT 'General';

-- Update existing videos to have a default section
UPDATE public.trainer_videos 
SET section = 'General' 
WHERE section IS NULL;

-- Add comment
COMMENT ON COLUMN public.trainer_videos.section IS 'Video category: Chest, Back, Shoulders, Arms, Legs, Core, Cardio, General';