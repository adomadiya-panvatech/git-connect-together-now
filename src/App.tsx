
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import Login from "./pages/Login";
import Opportunities from "./pages/Opportunities";
import Accounts from "./pages/Accounts";
import Contacts from "./pages/Contacts";
import Leads from "./pages/Leads";
import Communications from "./pages/Communications";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CRM from "./pages/CRM";

import { ContactModal } from '@/components/ContactModal';
import { ContactEditModal } from '@/components/ContactEditModal';
import { LeadModal } from '@/components/LeadModal';
import { LeadEditModal } from '@/components/LeadEditModal';
import { OpportunityModal } from '@/components/OpportunityModal';
import { OpportunityEditModal } from '@/components/OpportunityEditModal';
import { AccountModal } from '@/components/AccountModal';
import { AccountEditModal } from '@/components/AccountEditModal';
import { SMSModal } from '@/components/SMSModal';
import { EmailModal } from '@/components/EmailModal';

const queryClient = new QueryClient();

const App = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);
  const [editContact, setEditContact] = useState(null);
  
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isEditLeadModalOpen, setIsEditLeadModalOpen] = useState(false);
  const [editLead, setEditLead] = useState(null);
  
  const [isOpportunityModalOpen, setIsOpportunityModalOpen] = useState(false);
  const [isEditOpportunityModalOpen, setIsEditOpportunityModalOpen] = useState(false);
  const [editOpportunity, setEditOpportunity] = useState(null);
  
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isEditAccountModalOpen, setIsEditAccountModalOpen] = useState(false);
  const [editAccount, setEditAccount] = useState(null);
  
  const [isSMSModalOpen, setIsSMSModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const modalHandlers = {
    onOpenContactModal: () => setIsContactModalOpen(true),
    onOpenEditContactModal: (contact) => {
      setEditContact(contact);
      setIsEditContactModalOpen(true);
    },
    onOpenLeadModal: () => setIsLeadModalOpen(true),
    onOpenEditLeadModal: (lead) => {
      setEditLead(lead);
      setIsEditLeadModalOpen(true);
    },
    onOpenOpportunityModal: () => setIsOpportunityModalOpen(true),
    onOpenEditOpportunityModal: (opportunity) => {
      setEditOpportunity(opportunity);
      setIsEditOpportunityModalOpen(true);
    },
    onOpenAccountModal: () => setIsAccountModalOpen(true),
    onOpenEditAccountModal: (account) => {
      setEditAccount(account);
      setIsEditAccountModalOpen(true);
    },
    onOpenSMSModal: () => setIsSMSModalOpen(true),
    onOpenEmailModal: () => setIsEmailModalOpen(true),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Index {...modalHandlers} />} />
            <Route path="/crm" element={<CRM {...modalHandlers} />} />
            <Route path="/opportunities" element={<Opportunities {...modalHandlers} />} />
            <Route path="/accounts" element={<Accounts {...modalHandlers} />} />
            <Route path="/contacts" element={<Contacts {...modalHandlers} />} />
            <Route path="/leads" element={<Leads {...modalHandlers} />} />
            <Route path="/communications" element={<Communications {...modalHandlers} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Global Modals */}
          <ContactModal 
            isOpen={isContactModalOpen} 
            onClose={() => setIsContactModalOpen(false)} 
          />
          <ContactEditModal 
            isOpen={isEditContactModalOpen}
            onClose={() => {
              setIsEditContactModalOpen(false);
              setEditContact(null);
            }}
            contact={editContact}
          />
          <LeadModal 
            isOpen={isLeadModalOpen} 
            onClose={() => setIsLeadModalOpen(false)} 
          />
          <LeadEditModal 
            isOpen={isEditLeadModalOpen}
            onClose={() => {
              setIsEditLeadModalOpen(false);
              setEditLead(null);
            }}
            lead={editLead}
          />
          <OpportunityModal 
            isOpen={isOpportunityModalOpen} 
            onClose={() => setIsOpportunityModalOpen(false)} 
          />
          <OpportunityEditModal 
            isOpen={isEditOpportunityModalOpen}
            onClose={() => {
              setIsEditOpportunityModalOpen(false);
              setEditOpportunity(null);
            }}
            opportunity={editOpportunity}
          />
          <AccountModal 
            isOpen={isAccountModalOpen} 
            onClose={() => setIsAccountModalOpen(false)} 
          />
          <AccountEditModal 
            isOpen={isEditAccountModalOpen}
            onClose={() => {
              setIsEditAccountModalOpen(false);
              setEditAccount(null);
            }}
            account={editAccount}
          />
          <SMSModal 
            isOpen={isSMSModalOpen} 
            onClose={() => setIsSMSModalOpen(false)} 
          />
          <EmailModal 
            isOpen={isEmailModalOpen} 
            onClose={() => setIsEmailModalOpen(false)} 
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
