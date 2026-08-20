/* ============================================================================
 * /cards/prepaid (Page 5.5) — Prepaid Card Management
 * ========================================================================== */
import {
  PrepaidOverview,
  PrepaidCardsSection,
  BalancesSection,
  ControlsSection,
  PrepaidActivitySection,
  PrepaidFeesSection,
} from "../../page5";

export default function PrepaidPage() {
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