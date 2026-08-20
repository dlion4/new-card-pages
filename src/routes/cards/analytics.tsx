/* ============================================================================
 * /cards/analytics (Page 5.8) — Card Analytics & Reporting
 * ========================================================================== */
import {
  AnalyticsOverview,
  IssuanceSection,
  RevenueSection,
  ConcentrationSection,
  CorporateSpendSection,
  InsightsSection,
} from "../../page8";

export default function AnalyticsPage() {
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