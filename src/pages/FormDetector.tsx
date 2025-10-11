import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, CheckCircle, AlertTriangle, Video, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const FormDetector = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gradient-gold">Form Detector</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Coming Soon Banner */}
        <Card className="p-8 text-center border-primary/50 bg-gradient-to-r from-primary/10 to-secondary/10">
          <Camera className="w-20 h-20 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">AI-Powered Form Detection</h2>
          <p className="text-xl text-muted-foreground mb-4">Coming Soon</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Train smarter and safer with real-time exercise form analysis. Our AI-powered form detector 
            will watch your movements and provide instant feedback to help you perfect your technique.
          </p>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Real-Time Camera Analysis</h3>
                <p className="text-muted-foreground">
                  Position your camera in front of you while exercising. The AI analyzes your movements 
                  in real-time using your device's camera.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Corrections</h3>
                <p className="text-muted-foreground">
                  Get instant feedback when your form is incorrect. The AI detects improper posture, 
                  alignment issues, and provides corrective hints.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Injury Prevention</h3>
                <p className="text-muted-foreground">
                  Prevent injuries by ensuring proper form. Receive alerts when you're at risk of 
                  incorrect movement patterns that could lead to injury.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Form Scoring</h3>
                <p className="text-muted-foreground">
                  Track your form quality over time with detailed scoring. See your improvement and 
                  identify areas that need more attention.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Video className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Exercise Library Support</h3>
                <p className="text-muted-foreground">
                  Works with a wide range of exercises including squats, deadlifts, push-ups, 
                  bench press, and more. Constantly expanding exercise database.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Tips</h3>
                <p className="text-muted-foreground">
                  Receive personalized coaching tips based on your specific form issues. 
                  Learn exactly what to adjust for perfect execution.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* How It Works */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">How It Will Work</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Set Up Your Camera</h3>
                <p className="text-muted-foreground">
                  Position your device so the camera can see your full body during the exercise.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Select Your Exercise</h3>
                <p className="text-muted-foreground">
                  Choose the exercise you want to perform from our supported exercise library.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Start Exercising</h3>
                <p className="text-muted-foreground">
                  Begin your workout. The AI will analyze your form in real-time and provide instant feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Improve & Track</h3>
                <p className="text-muted-foreground">
                  Apply the corrections suggested by the AI and track your form improvement over time.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Notify Me */}
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to be notified when this launches?</h2>
          <p className="text-muted-foreground mb-6">
            We're working hard to bring you this feature. Stay tuned for updates!
          </p>
          <Button disabled className="cursor-not-allowed">
            Coming Soon
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default FormDetector;