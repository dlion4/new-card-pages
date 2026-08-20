import { useEffect } from "react";
import { AppProvider, scrollToId, ToastViewport, useApp } from "./store";
import { MobileNav, QuickBar, SidebarContent, Topbar } from "./Shell";
import { CardsSection, OverviewSection } from "./sectionsA";
import { AlertsSection, TransactionsSection } from "./sectionsB";
import { AnalyticsSection, ProgramSection, SecuritySection } from "./sectionsC";
import { CardDrawer, ConfigureAlertsModal, FreezeAllModal, FreezeModal, LimitsDrawer, PinModal } from "./modalsA";
import { DisputeModal, FraudWizardModal, IssueCardModal, ShortcutsModal, SupportDrawer } from "./modalsB";
import { HeroAndTiers, OrdersSection, MyPhysCardsSection, FeeSection, AddressSection, ReplacementSection, ActivateModal, ReplaceModal } from "./page2";
import { GuardrailsSection, FundingSection, VirtualActivitySection, VirtualBestPractice, VirtualCardsSection, VirtualDetailsModal, VirtualIssueModal, VirtualOverview } from "./page3";
import { CreditOverview, CreditLineSection, CreditCardsSection, RepaymentSection, CreditActivitySection, CreditInsightsSection, CreditIssueModal, CreditDetailsModal, RepayModal, StatementDrawer } from "./page4";
import { PrepaidOverview, PrepaidCardsSection, BalancesSection, ControlsSection, PrepaidActivitySection, PrepaidFeesSection, PrepaidIssueModal, TopupModal, PrepaidManageDrawer } from "./page5";
import { CorporateOverview, DepartmentsSection, EmployeesSection, PoliciesSection, ApprovalsSection, BillingSection, BillingModal, InviteEmployeeModal, ApprovalModal, PolicyModal } from "./page6";
import { SecurityOverview, FraudEventsSection, SafeguardsSection, ReportCardSection, SuspiciousSection, AuditLogSection, FraudWizardModal as FraudWizardModal7, FraudEventModal } from "./page7";
import { AnalyticsOverview, IssuanceSection, RevenueSection, ConcentrationSection, CorporateSpendSection, InsightsSection, ReportBuilderModal } from "./page8";
import { AdminOverview, GatewayLogsSection, IntegrationsSection, AdminAccessSection, EnvironmentSection, HealthCheckModal, WebhookModal, ApiKeyModal } from "./page9";
import { SettingsOverview, DefaultsSection, SupportSection, FaqSection, ResourcesSection, SettingsDefaultsModal } from "./page10";
import { Icon, Logo } from "./icons";

/* Global keyboard shortcuts */
function useShortcuts() {
  const { openModal, page } = useApp();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable;
      if (typing) return;
      const sectionMap: Record<string, string> = {
        "1": "overview",
        "2": page === "5.10" ? "card-defaults" : page === "5.9" ? "gateway-logs" : page === "5.8" ? "issuance" : page === "5.7" ? "fraud-events" : page === "5.6" ? "departments" : page === "5.5" ? "prepaid-cards" : page === "5.4" ? "credit-line" : page === "5.3" ? "virtual-cards" : page === "5.2" ? "orders" : "cards",
        "3": page === "5.10" ? "support" : page === "5.9" ? "integrations" : page === "5.8" ? "revenue" : page === "5.7" ? "safeguards" : page === "5.6" ? "employees" : page === "5.5" ? "balances" : page === "5.4" ? "credit-cards" : page === "5.3" ? "guardrails" : page === "5.2" ? "mycards" : "alerts",
        "4": page === "5.10" ? "faq" : page === "5.9" ? "admin-access" : page === "5.8" ? "concentration" : page === "5.7" ? "report-card" : page === "5.6" ? "policies" : page === "5.5" ? "controls" : page === "5.4" ? "repayment" : page === "5.3" ? "funding" : page === "5.2" ? "fees" : "transactions",
        "5": page === "5.10" ? "resources" : page === "5.9" ? "environment" : page === "5.8" ? "corporate-spend" : page === "5.7" ? "suspicious" : page === "5.6" ? "approvals" : page === "5.5" ? "prepaid-activity" : page === "5.4" ? "credit-activity" : page === "5.3" ? "activity" : page === "5.2" ? "addresses" : "security",
        "6": page === "5.10" ? "overview" : page === "5.9" ? "overview" : page === "5.8" ? "insights" : page === "5.7" ? "audit-log" : page === "5.6" ? "program-billing" : page === "5.5" ? "prepaid-fees" : page === "5.4" ? "credit-insights" : page === "5.3" ? "best-practice" : page === "5.2" ? "replacement" : "analytics",
        "7": "program",
      };
      if (e.key === "/") {
        e.preventDefault();
        (document.querySelector('input[placeholder^="Search cards"]') as HTMLInputElement | null)?.focus();
      } else if (e.key.toLowerCase() === "n") {
        openModal({ type: "issue" });
      } else if (e.key.toLowerCase() === "a") {
        openModal({ type: "alerts" });
      } else if (e.key.toLowerCase() === "f") {
        openModal({ type: "freezeAll" });
      } else if (sectionMap[e.key]) {
        scrollToId(sectionMap[e.key]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openModal, page]);
}

function Footer() {
  const { openDrawer, toast } = useApp();
  return (
    <footer className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-white px-5 py-4 shadow-pm">
      <span className="flex items-center gap-2">
        <Logo size={22} />
        <span className="font-display text-[12.5px] font-bold text-ink">PayMo BAAS</span>
        <span className="rounded-md bg-canvas px-1.5 py-0.5 text-[10px] font-bold text-muted">v2.4</span>
      </span>
      <span className="hidden text-[11px] font-semibold text-faint sm:inline">CBK-licensed issuer partner · PCI-DSS L1 · Visa & Mastercard principal member</span>
      <span className="ml-auto flex items-center gap-4">
        <button onClick={() => scrollToId("health")} className="flex items-center gap-1.5 text-[11.5px] font-bold text-muted transition hover:text-ink">
          <span className="live-dot" /> System status
        </button>
        <button onClick={() => toast("info", "Opening developer docs", "API reference for card issuance, authorisations and webhooks.")} className="text-[11.5px] font-bold text-muted transition hover:text-ink">
          API docs
        </button>
        <button onClick={() => openDrawer({ type: "support" })} className="flex items-center gap-1 text-[11.5px] font-bold text-pmgreen-dark transition hover:text-pmgreen">
          <Icon name="headset" size={13} /> Support
        </button>
      </span>
    </footer>
  );
}

/* Page 5.1 — Card Command Center */
function Page51() {
  return (
    <>
      <OverviewSection />
      <CardsSection />
      <AlertsSection />
      <TransactionsSection />
      <SecuritySection />
      <AnalyticsSection />
      <ProgramSection />
    </>
  );
}

/* Page 5.2 — Physical Debit Card Management */
function Page52() {
  return (
    <>
      <HeroAndTiers />
      <OrdersSection />
      <MyPhysCardsSection />
      <FeeSection />
      <AddressSection />
      <ReplacementSection />
    </>
  );
}

/* Page 5.3 — Virtual Debit Card Center */
function Page53() {
  return (
    <>
      <VirtualOverview />
      <VirtualCardsSection />
      <GuardrailsSection />
      <FundingSection />
      <VirtualActivitySection />
      <VirtualBestPractice />
    </>
  );
}

/* Page 5.4 — Virtual Credit Card Center */
function Page54() {
  return (
    <>
      <CreditOverview />
      <CreditLineSection />
      <CreditCardsSection />
      <RepaymentSection />
      <CreditActivitySection />
      <CreditInsightsSection />
    </>
  );
}

/* Page 5.5 — Prepaid Card Management */
function Page55() {
  return (
    <>
      <PrepaidOverview />
      <PrepaidCardsSection />
      <BalancesSection />
      <ControlsSection />
      <PrepaidActivitySection />
      <PrepaidFeesSection />
    </>
  );
}

/* Page 5.6 — Corporate & Business Card Programs */
function Page56() {
  return (
    <>
      <CorporateOverview />
      <DepartmentsSection />
      <EmployeesSection />
      <PoliciesSection />
      <ApprovalsSection />
      <BillingSection />
    </>
  );
}

/* Page 5.7 — Security & Fraud Prevention */
function Page57() {
  return (
    <>
      <SecurityOverview />
      <FraudEventsSection />
      <SafeguardsSection />
      <ReportCardSection />
      <SuspiciousSection />
      <AuditLogSection />
    </>
  );
}

/* Page 5.8 — Card Analytics & Reporting */
function Page58() {
  return (
    <>
      <AnalyticsOverview />
      <IssuanceSection />
      <RevenueSection />
      <ConcentrationSection />
      <CorporateSpendSection />
      <InsightsSection />
    </>
  );
}

/* Page 5.9 — Card Program Administration */
function Page59() {
  return (
    <>
      <AdminOverview />
      <GatewayLogsSection />
      <IntegrationsSection />
      <AdminAccessSection />
      <EnvironmentSection />
    </>
  );
}

/* Page 5.10 — Card Settings & Support */
function Page510() {
  return (
    <>
      <SettingsOverview />
      <DefaultsSection />
      <SupportSection />
      <FaqSection />
      <ResourcesSection />
    </>
  );
}

function Layout() {
  const { page, setPage, openDrawer } = useApp();
  useShortcuts();

  // global events from page10 (support links + self-service quick actions)
  useEffect(() => {
    const onOpenSupport = () => openDrawer({ type: "support" });
    const onGoto = (e: Event) => {
      const anchor = (e as CustomEvent<string>).detail;
      setPage("5.1");
      window.setTimeout(() => scrollToId(anchor), 120);
    };
    window.addEventListener("pm-open-support", onOpenSupport);
    window.addEventListener("pm-goto", onGoto);
    return () => {
      window.removeEventListener("pm-open-support", onOpenSupport);
      window.removeEventListener("pm-goto", onGoto);
    };
  }, [openDrawer, setPage]);

  return (
    <div className="canvas-wash min-h-screen">
      {/* Desktop sidebar */}
      <aside className="side-glow fixed inset-y-0 left-0 z-[45] hidden w-[250px] border-r border-white/[0.06] lg:block">
        <SidebarContent />
      </aside>

      <div className="lg:pl-[250px]">
        <Topbar />
        <main className="mx-auto w-full max-w-[1320px] px-4 pb-36 pt-5 sm:px-6">
          {page === "5.10" ? <Page510 /> : page === "5.9" ? <Page59 /> : page === "5.8" ? <Page58 /> : page === "5.7" ? <Page57 /> : page === "5.6" ? <Page56 /> : page === "5.5" ? <Page55 /> : page === "5.4" ? <Page54 /> : page === "5.3" ? <Page53 /> : page === "5.2" ? <Page52 /> : <Page51 />}
          <Footer />
        </main>
      </div>

      <QuickBar />
      <MobileNav />

      {/* Overlays — shared across both pages */}
      <ConfigureAlertsModal />
      <FreezeModal />
      <FreezeAllModal />
      <PinModal />
      <LimitsDrawer />
      <CardDrawer />
      <IssueCardModal />
      <DisputeModal />
      <FraudWizardModal />
      <ShortcutsModal />
      <SupportDrawer />
      <ActivateModal />
      <ReplaceModal />
      <VirtualIssueModal />
      <VirtualDetailsModal />
      <CreditIssueModal />
      <CreditDetailsModal />
      <RepayModal />
      <StatementDrawer />
      <PrepaidIssueModal />
      <TopupModal />
      <PrepaidManageDrawer />
      <BillingModal />
      <InviteEmployeeModal />
      <ApprovalModal />
      <PolicyModal />
      <FraudWizardModal7 />
      <FraudEventModal />
      <ReportBuilderModal />
      <HealthCheckModal />
      <WebhookModal />
      <ApiKeyModal />
      <SettingsDefaultsModal />

      <ToastViewport />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  );
}
