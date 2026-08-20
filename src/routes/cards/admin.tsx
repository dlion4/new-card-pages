/* ============================================================================
 * /cards/admin (Page 5.9) — Card Program Administration
 * ========================================================================== */
import {
  AdminOverview,
  GatewayLogsSection,
  IntegrationsSection,
  AdminAccessSection,
  EnvironmentSection,
} from "../../page9";

export default function AdminPage() {
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