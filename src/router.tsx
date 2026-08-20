import {
  createRouter as createTanStackRouter,
  createRootRoute,
  createRoute,
  redirect,
  Outlet,
} from "@tanstack/react-router";
import CardsShell from "./CardsShell";

/* =========================================================================
 * Page components
 * ========================================================================= */
import CommandCenterPage from "./routes/cards/command-center";
import PhysicalPage from "./routes/cards/physical";
import VirtualPage from "./routes/cards/virtual";
import CreditPage from "./routes/cards/credit";
import PrepaidPage from "./routes/cards/prepaid";
import CorporatePage from "./routes/cards/corporate";
import SecurityPage from "./routes/cards/security";
import AnalyticsPage from "./routes/cards/analytics";
import AdminPage from "./routes/cards/admin";
import SettingsPage from "./routes/cards/settings";

/* =========================================================================
 * Route tree
 *   /               → redirect to /cards
 *   /cards          → layout route (CardsShell with Outlet)
 *   /cards/         → command center (5.1)
 *   /cards/physical → physical debit (5.2)
 *   /cards/virtual  → virtual debit (5.3)
 *   /cards/credit   → virtual credit (5.4)
 *   /cards/prepaid  → prepaid (5.5)
 *   /cards/corporate→ corporate (5.6)
 *   /cards/security → security & fraud (5.7)
 *   /cards/analytics→ analytics & reporting (5.8)
 *   /cards/admin    → program admin (5.9)
 *   /cards/settings → settings & support (5.10)
 * ========================================================================= */

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    throw redirect({ to: "/cards" });
  },
});

const cardsLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cards",
  component: CardsShell,
});


const cardsIndexRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/",
  component: CommandCenterPage,
});

const cardsPhysicalRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/physical",
  component: PhysicalPage,
});

const cardsVirtualRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/virtual",
  component: VirtualPage,
});

const cardsCreditRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/credit",
  component: CreditPage,
});

const cardsPrepaidRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/prepaid",
  component: PrepaidPage,
});

const cardsCorporateRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/corporate",
  component: CorporatePage,
});

const cardsSecurityRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/security",
  component: SecurityPage,
});

const cardsAnalyticsRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/analytics",
  component: AnalyticsPage,
});

const cardsAdminRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/admin",
  component: AdminPage,
});

const cardsSettingsRoute = createRoute({
  getParentRoute: () => cardsLayoutRoute,
  path: "/settings",
  component: SettingsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  cardsLayoutRoute.addChildren([
    cardsIndexRoute,
    cardsPhysicalRoute,
    cardsVirtualRoute,
    cardsCreditRoute,
    cardsPrepaidRoute,
    cardsCorporateRoute,
    cardsSecurityRoute,
    cardsAnalyticsRoute,
    cardsAdminRoute,
    cardsSettingsRoute,
  ]),
]);

export function getRouter() {
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    scrollRestoration: true,
  });
  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}