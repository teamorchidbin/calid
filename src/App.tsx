
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { EventTypes } from "./pages/EventTypes";
import { EditEvent } from "./pages/EditEvent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<EventTypes />} />
            <Route path="event/:eventId/:tab" element={<EditEvent />} />
            <Route path="bookings" element={<div className="p-8">Bookings page coming soon</div>} />
            <Route path="availability" element={<div className="p-8">Availability page coming soon</div>} />
            <Route path="teams" element={<div className="p-8">Teams page coming soon</div>} />
            <Route path="apps" element={<div className="p-8">Apps page coming soon</div>} />
            <Route path="routing-forms" element={<div className="p-8">Routing Forms page coming soon</div>} />
            <Route path="workflows" element={<div className="p-8">Workflows page coming soon</div>} />
            <Route path="insights" element={<div className="p-8">Insights page coming soon</div>} />
            <Route path="settings" element={<div className="p-8">Settings page coming soon</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
