import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, X, Check, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const HeightGrowth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollToDiet = () => {
    document.getElementById('diet-plan')?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <h1 className="text-2xl font-bold text-gradient-gold">Height Growth</h1>
          <div className="w-20" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Introduction */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">🌱 Height Growth</h2>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            Growing taller isn't just about age—it's about the right habits, nutrition, and exercise. 
            Scientifically, height can be influenced by genetics, hormones, lifestyle, and nutrition. 
            During puberty, growth plates are active, and that's the ideal time to focus on growth.
          </p>
        </Card>

        {/* Correct Information */}
        <Card className="p-8 border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Check className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-primary">Correct Information About Height Growth</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Running, skipping, and jumping activities put stress on bones, and when recovered with proper 
                nutrition, they may help support height during growing years.
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Human Growth Hormone (HGH) is naturally released during deep sleep and exercise.
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Stretching exercises like hanging, cobra stretch, and side bends may help improve posture 
                and allow your body to reach its natural height potential.
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Calcium, Vitamin D, Protein, and Zinc are essential for bone health and growth.
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Good sleep (7–9 hours) supports natural hormone production that aids height growth.
              </span>
            </li>
          </ul>
        </Card>

        {/* Common Myths */}
        <Card className="p-8 border-destructive/20">
          <div className="flex items-center gap-3 mb-6">
            <X className="w-6 h-6 text-destructive" />
            <h3 className="text-2xl font-bold text-destructive">Common Myths & Wrong Information</h3>
          </div>
          
          <ul className="space-y-4">
            <li className="flex gap-3">
              <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Drinking milk alone will not make you taller — it's just one part of a balanced diet.
              </span>
            </li>
            <li className="flex gap-3">
              <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Lifting weights stunts growth — FALSE. Done properly, strength training is safe for teens.
              </span>
            </li>
            <li className="flex gap-3">
              <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Height can be increased after growth plates close (~age 18–21) — Generally false for most people, 
                except in cases of posture correction.
              </span>
            </li>
            <li className="flex gap-3">
              <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">
                Stretching increases bone length — it may help posture, but it does not elongate bones directly.
              </span>
            </li>
          </ul>
        </Card>

        {/* Exercises */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Exercises for Height Growth</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Skipping Rope", desc: "Enhances blood circulation and bone strength" },
              { name: "Hanging from a Bar", desc: "Helps decompress the spine and improves posture" },
              { name: "Swimming", desc: "Full-body stretch and cardio in one" },
              { name: "Cobra Stretch", desc: "Strengthens spine and improves flexibility" },
              { name: "Side Bends", desc: "Tones the sides and helps with posture" },
              { name: "Basketball/Volleyball", desc: "Active sports that naturally support growth" }
            ].map((exercise, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 hover-scale">
                <h4 className="font-semibold mb-2">{exercise.name}</h4>
                <p className="text-sm text-muted-foreground">{exercise.desc}</p>
              </div>
            ))}
          </div>

          <Button onClick={scrollToDiet} className="mt-8 w-full md:w-auto">
            🍽️ View Height Growth Diet Plan
          </Button>
        </Card>

        {/* Diet Plan Section */}
        <Card id="diet-plan" className="p-8 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-4">🥗 Height Growth Diet Plan</h2>
          <p className="text-muted-foreground mb-8">
            Choose your preferred diet category below. A balanced diet plays a crucial role in height development, 
            especially during teenage years. Here are nutrition-rich food options:
          </p>

          {/* Vegetarian Diet */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🌿 Vegetarian Diet</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Milk, paneer (cottage cheese), curd – rich in calcium & protein</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Tofu, legumes (lentils, chickpeas), beans – high in plant protein</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Green leafy vegetables – spinach, broccoli, rich in Vitamin K & calcium</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Fruits – bananas, oranges, apples (vitamins & minerals)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Nuts & seeds – almonds, walnuts, pumpkin seeds (Zinc, Omega-3)</span>
              </li>
            </ul>
          </div>

          {/* Non-Vegetarian Diet */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🍗 Non-Vegetarian Diet</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Eggs – rich in protein and Vitamin D</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Chicken breast – lean protein for muscle and bone growth</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Fish – Salmon, tuna for Omega-3 and Vitamin D</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Liver – packed with iron and Vitamin A</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Dairy – milk, cheese, yogurt for calcium and protein</span>
              </li>
            </ul>
          </div>

          {/* Mixed Diet */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">🍱 Mixed Diet (Veg + Non-Veg)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Combines all the above options for a fully balanced meal plan</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Example Day Plan: Boiled eggs + toast (breakfast), rice + dal + chicken (lunch), 
                  nuts + fruits (snack), tofu or fish + veggies (dinner)
                </span>
              </li>
            </ul>
          </div>

          <p className="text-muted-foreground italic border-l-4 border-primary pl-4 py-2">
            📝 Note: Consistency in diet and exercise is key. Avoid junk food and prioritize whole, nutrient-rich meals.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HeightGrowth;