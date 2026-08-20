/* ============================================================================
 * /cards/virtual (Page 5.3) — Virtual Debit Card Center
 * ========================================================================== */
import {
  VirtualOverview,
  VirtualCardsSection,
  GuardrailsSection,
  FundingSection,
  VirtualActivitySection,
  VirtualBestPractice,
} from "../../page3";

export default function VirtualPage() {
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