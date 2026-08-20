/* ============================================================================
 * /cards/physical (Page 5.2) — Physical Debit Card Management
 * ========================================================================== */
import { HeroAndTiers, OrdersSection, MyPhysCardsSection, FeeSection, AddressSection, ReplacementSection } from "../../page2";

export default function PhysicalPage() {
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