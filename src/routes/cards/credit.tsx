/* ============================================================================
 * /cards/credit (Page 5.4) — Virtual Credit Card Center
 * ========================================================================== */
import {
  CreditOverview,
  CreditLineSection,
  CreditCardsSection,
  RepaymentSection,
  CreditActivitySection,
  CreditInsightsSection,
} from "../../page4";

export default function CreditPage() {
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