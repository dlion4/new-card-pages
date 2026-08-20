/* ============================================================================
 * /cards (Page 5.1) — Card Command Center
 * ========================================================================== */
import { OverviewSection, CardsSection } from "../../sectionsA";
import { AlertsSection, TransactionsSection } from "../../sectionsB";
import { AnalyticsSection, ProgramSection, SecuritySection } from "../../sectionsC";

export default function CommandCenterPage() {
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