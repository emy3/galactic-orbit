import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Rocket, Sun, Zap, Activity } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <Rocket className="w-20 h-20 text-primary" />
          </div>
          <h1 className="text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
            Galactic Orbit
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore real-time space weather data from NASA's DONKI Database
          </p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            Space Weather Database Of Notifications, Knowledge, Information
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8">
              Explore Events
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <Sun className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Solar Flares</CardTitle>
              <CardDescription>
                Track solar flare events and their intensity levels in real-time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Monitor solar activity that could affect Earth's magnetosphere and satellite operations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <Zap className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Geomagnetic Storms</CardTitle>
              <CardDescription>
                Stay informed about geomagnetic storm forecasts and observations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get alerts on storms that can impact power grids, GPS, and radio communications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <Activity className="w-12 h-12 text-primary mb-4" />
              <CardTitle>Coronal Mass Ejections</CardTitle>
              <CardDescription>
                View CME analysis and predictions from NASA scientists
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Understand the impacts of massive solar eruptions on our space environment.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-20 border-t border-border/50">
        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Powered by NASA's Space Weather Database (DONKI)
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Galactic Orbit. Data provided by NASA API.
          </p>
        </div>
      </footer>
    </div>
  )
}
