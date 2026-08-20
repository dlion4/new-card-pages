/* ============================================================================
 * /cards/corporate (Page 5.6) — Corporate & Business Card Programs
 * ========================================================================== */
import {
  CorporateOverview,
  DepartmentsSection,
  EmployeesSection,
  PoliciesSection,
  ApprovalsSection,
  BillingSection,
} from "../../page6";

export default function CorporatePage() {
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