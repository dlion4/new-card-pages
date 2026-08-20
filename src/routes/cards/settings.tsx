/* ============================================================================
 * /cards/settings (Page 5.10) — Card Settings & Support
 * ========================================================================== */
import {
  SettingsOverview,
  DefaultsSection,
  SupportSection,
  FaqSection,
  ResourcesSection,
} from "../../page10";

export default function SettingsPage() {
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