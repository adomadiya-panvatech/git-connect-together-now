
import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';
import { ContactModal } from '@/components/ContactModal';
import { LeadModal } from '@/components/LeadModal';
import { OpportunityModal } from '@/components/OpportunityModal';
import { AccountModal } from '@/components/AccountModal';
import { SMSModal } from '@/components/SMSModal';
import { EmailModal } from '@/components/EmailModal';
import { ChatBot } from '@/components/ChatBot';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { ContactEditModal } from "@/components/ContactEditModal";
import { LeadEditModal } from "@/components/LeadEditModal";
import { OpportunityEditModal } from "@/components/OpportunityEditModal";
import { AccountEditModal } from "@/components/AccountEditModal";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeModule, setActiveModule] = useState('dashboard');
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

  // Create a context or props to pass modal handlers down
  const childrenWithProps = React.cloneElement(children as React.ReactElement, {
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
  });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        <div className="flex w-full">
          <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
          
          <main className="flex-1 min-h-screen">
            <TopBar />
            {childrenWithProps}
          </main>
        </div>
        
        {/* Modals */}
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
        
        {/* ChatBot */}
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};
