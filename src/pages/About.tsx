import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Info, Dumbbell, Users, Trophy, Heart, Book } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <Info className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">About PRIME FLEX</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* App Overview */}
        <Card className="mb-6 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Dumbbell className="w-7 h-7 text-primary" />
              About PRIME FLEX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              <strong>PRIME FLEX</strong> is a modern all-in-one fitness app that combines science-backed training, 
              personalized diets, and visual progress tracking — helping you achieve your fitness goals at the gym or home. 
              It adapts to your age, goals, and preferences, offering a smarter way to train, eat, and grow stronger.
            </p>
          </CardContent>
        </Card>

        {/* Features Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Key Features & How to Use
          </h2>
          
          <div className="space-y-4">
            {/* Feature 1 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">🥗 Personalized Diet Plans</CardTitle>
                <CardDescription>Create balanced meal plans tailored to your goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Go to <strong>Diet Plan</strong></li>
                  <li>Select your goal (Fat Loss / Lean / Bulk / Athletic)</li>
                  <li>Choose <strong>Veg</strong> or <strong>Non-Veg</strong></li>
                  <li>Tick ✔ after each meal — your progress % and graph update automatically</li>
                  <li>Add allergies to filter foods you don't eat</li>
                  <li>Weekly calorie charts show daily intake vs target</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: Save your meal plan once you finish editing it.</p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">💪 Workout Planner</CardTitle>
                <CardDescription>Manage and track your daily gym workouts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Open <strong>Workout Plan</strong></li>
                  <li>Pick a day (Monday–Sunday)</li>
                  <li>Perform exercises listed for that day</li>
                  <li>Tick ✔ after each workout</li>
                  <li>View real-time <strong>completion %</strong> and <strong>strength graph</strong> updates</li>
                  <li>Get motivational popups when all workouts are done</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: Tap ▶️ beside an exercise to see the proper form via Workout Videos.</p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">🏠 Home Workout</CardTitle>
                <CardDescription>Train without equipment, anytime</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Open <strong>Home Workout</strong></li>
                  <li>Browse bodyweight exercises (Push-ups, Planks, Squats, etc.)</li>
                  <li>Read instructions, reps, and form guides</li>
                  <li>Tap ▶️ to watch a demonstration from a certified trainer</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: Perfect for home or travel workouts — progress still tracks normally.</p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">🤸 Calisthenics</CardTitle>
                <CardDescription>Build strength using your body weight</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Go to <strong>Calisthenics</strong></li>
                  <li>Select any movement (Pull-ups, Dips, Muscle-ups, etc.)</li>
                  <li>Follow the step-by-step form guide</li>
                  <li>Tap ▶️ beside it to watch the related trainer tutorial</li>
                  <li>Move through difficulty levels over time (Beginner → Advanced)</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: Improves mobility, flexibility, and muscle control.</p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">📊 Strength Tracker</CardTitle>
                <CardDescription>Visualize your progress over time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Open <strong>Strength Tracker</strong></li>
                  <li>Enter <strong>sets, reps, and weight</strong> after each workout</li>
                  <li>The graph updates automatically (X-axis = Days / Y-axis = Weight)</li>
                  <li>Displays weekly performance insights (e.g., "+15% stronger this week")</li>
                  <li>Stores all progress (data stays even if you restart the app)</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: Track every lift to see how your strength evolves.</p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">🧃 Supplements & Nutrition</CardTitle>
                <CardDescription>Learn about essential supplements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Go to <strong>Supplements Guide</strong></li>
                  <li>Browse categories (Protein, Creatine, BCAAs, Pre-workout, Omega-3, etc.)</li>
                  <li>Read details on benefits, dosage, and timing</li>
                  <li>Age-based personalization ensures safety for all users up to 65 years old</li>
                </ol>
                <p className="text-sm italic text-destructive">⚠️ Disclaimer: Consult a certified nutritionist before using any supplement.</p>
              </CardContent>
            </Card>

            {/* Feature 7 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">🎥 Workout Videos</CardTitle>
                <CardDescription>Professional exercise guidance organized by muscle group</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Open <strong>Workout Videos</strong></li>
                  <li>Browse videos organized by sections (Chest, Back, Shoulders, Arms, Legs, Core, Cardio)</li>
                  <li>Search by exercise name, category, or difficulty</li>
                  <li>Tap any video card to watch it directly in the app</li>
                  <li>Videos play with screen capture protection - no downloads or screenshots allowed</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: All videos are categorized by muscle groups for easy navigation and feature in-app playback.</p>
              </CardContent>
            </Card>

            {/* Feature 8 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">🔥 Fat Loss Mode</CardTitle>
                <CardDescription>Reduce fat through controlled calorie deficit</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Choose <strong>Fat Loss Mode</strong> in the Diet Plan</li>
                  <li>Follow the recommended meals (Breakfast → Dinner)</li>
                  <li>Track completion using ✔ and graph visualization</li>
                  <li>Stay hydrated and aim for a 300–500 calorie deficit daily</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: Combine with light cardio for faster results.</p>
              </CardContent>
            </Card>

            {/* Feature 9 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">📅 Weekly Workout Schedule</CardTitle>
                <CardDescription>Consistent structure for muscle targeting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold">Day</th>
                        <th className="text-left py-2 font-semibold">Focus</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2">Monday</td>
                        <td className="py-2">Lower Chest + Triceps</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">Tuesday</td>
                        <td className="py-2">Back + Biceps + Shoulders</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">Wednesday</td>
                        <td className="py-2">Upper Chest + Triceps</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">Thursday</td>
                        <td className="py-2">Back + Biceps + Shoulders</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">Friday</td>
                        <td className="py-2">Lower Chest + Triceps</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">Saturday</td>
                        <td className="py-2">Back + Biceps + Shoulders</td>
                      </tr>
                      <tr>
                        <td className="py-2">Sunday</td>
                        <td className="py-2 font-semibold text-primary">Legs + Core (intense)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm italic text-primary mt-3">💡 Tip: Tap any day to open that day's detailed workout page.</p>
              </CardContent>
            </Card>

            {/* Feature 10 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">🧑‍⚕️ Age-Based Personalization</CardTitle>
                <CardDescription>Adjusts workouts and diets for users up to 65 years old</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Enter your <strong>age, height, and weight</strong> in your profile</li>
                  <li>The app will automatically adjust calorie recommendations</li>
                  <li>Modify training intensity based on age</li>
                  <li>Suggest age-safe supplements</li>
                </ul>
                <p className="text-sm italic text-primary">💡 Tip: Updating your age or goal refreshes all recommendations instantly.</p>
              </CardContent>
            </Card>

            {/* Feature 11 */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">💬 Feedback System</CardTitle>
                <CardDescription>Communicate directly with developers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold">How to Use:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Open <strong>Settings → Feedback</strong> or go to the <strong>Workout Videos</strong> bottom section</li>
                  <li>Write your message or suggestions</li>
                  <li>Submit — your feedback is securely saved for developer review</li>
                </ol>
                <p className="text-sm italic text-primary">💡 Tip: Use it to request new features or report issues.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="mb-6 border-border">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Book className="w-5 h-5 text-primary" />
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li><strong>Frontend:</strong> React</li>
              <li><strong>Framework:</strong> Vite</li>
              <li><strong>Backend:</strong> Lovable Cloud</li>
              <li><strong>Storage:</strong> Supabase Storage</li>
              <li><strong>Charts:</strong> Recharts</li>
              <li><strong>UI:</strong> Shadcn/UI</li>
              <li><strong>Styling:</strong> TailwindCSS</li>
              <li><strong>Navigation:</strong> React Router</li>
            </ul>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-6 border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-xl text-destructive">⚠️ Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              PRIME FLEX provides general fitness education and planning tools. 
              Always consult certified trainers or doctors before following new routines or diets. 
              Individual results vary depending on consistency, effort, and health conditions.
            </p>
          </CardContent>
        </Card>

        {/* Developer Credits */}
        <Card className="mb-6 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Developer Credits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-lg font-bold">Developed By:</p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li className="text-lg">Ruthvik Reddy</li>
                <li className="text-lg">Anurag Yadav</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-border">
              <p className="text-sm font-semibold">Vision:</p>
              <p className="text-sm italic text-muted-foreground leading-relaxed">
                "To create a smart and adaptive fitness ecosystem that helps users train smarter, 
                eat better, and track real results — anywhere, anytime."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Version History */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Version History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-bold text-primary min-w-[60px]">v2.0.0</span>
                <span className="text-muted-foreground">Added About Page + Full User Guide + Age-Based Personalization</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold min-w-[60px]">v1.5.0</span>
                <span className="text-muted-foreground">Added Fat Loss Mode with visual progress tracking</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold min-w-[60px]">v1.4.0</span>
                <span className="text-muted-foreground">Linked exercises with video tutorials</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold min-w-[60px]">v1.3.0</span>
                <span className="text-muted-foreground">Added Workout Videos integration with categories</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold min-w-[60px]">v1.2.0</span>
                <span className="text-muted-foreground">Introduced Strength Tracker with real-time graph</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold min-w-[60px]">v1.1.0</span>
                <span className="text-muted-foreground">Added Home Workout section</span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold min-w-[60px]">v1.0.0</span>
                <span className="text-muted-foreground">Initial release with Diet & Workout Plans</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;