import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Countries from "@/pages/countries";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import Consultation from "@/pages/consultation";
import Eligibility from "@/pages/eligibility";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/countries" component={Countries} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/consultation" component={Consultation} />
      <Route path="/eligibility" component={Eligibility} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Header />
      <main className="min-h-screen">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
