/* ============================================================================
 * /cards/security (Page 5.7) — Security & Fraud Prevention
 * ========================================================================== */
import {
  SecurityOverview,
  FraudEventsSection,
  SafeguardsSection,
  ReportCardSection,
  SuspiciousSection,
  AuditLogSection,
} from "../../page7";

export default function SecurityPage() {
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