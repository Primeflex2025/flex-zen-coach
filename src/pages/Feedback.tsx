import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Feedback = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      toast({
        title: "Empty Feedback",
        description: "Please enter your feedback before submitting",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("feedback").insert({
      user_id: user?.id,
      message: feedback,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success!",
        description: "Your feedback has been submitted",
      });
      setFeedback("");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Feedback</h1>
              <p className="text-sm text-muted-foreground">Share your thoughts with us</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send Feedback</CardTitle>
            <CardDescription>
              Help us improve PRIME FLEX by sharing your suggestions, issues, or comments
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Tell us what you think..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={8}
              className="resize-none"
            />
            <Button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
              className="w-full"
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Feedback;
