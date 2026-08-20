/* ============================================================================
 * routes.ts — TanStack URL map for the PayMo BAAS Cards pages.
 * ----------------------------------------------------------------------------
 * Mirrors the business-dashboard pattern: each page has a canonical URL path,
 * and the `useCardsNavigate()` hook wraps TanStack's `useNavigate()` so the
 * existing onNavigate contract (`setPage`) works seamlessly with deep links,
 * browser back/forward, and sidebar state — all without touching page designs.
 * ========================================================================== */

import { useNavigate } from "@tanstack/react-router";
import { useCallback } from "react";

export type CardsPageId =
	| "5.1"
	| "5.2"
	| "5.3"
	| "5.4"
	| "5.5"
	| "5.6"
	| "5.7"
	| "5.8"
	| "5.9"
	| "5.10";

export const CARDS_PAGE_PATH: Record<CardsPageId, string> = {
	"5.1": "/cards",
	"5.2": "/cards/physical",
	"5.3": "/cards/virtual",
	"5.4": "/cards/credit",
	"5.5": "/cards/prepaid",
	"5.6": "/cards/corporate",
	"5.7": "/cards/security",
	"5.8": "/cards/analytics",
	"5.9": "/cards/admin",
	"5.10": "/cards/settings",
};

/** Map a URL path segment back to the internal page id. */
export function pathToCardsPage(path: string): CardsPageId {
	if (!path) return "5.1";
	if (path.startsWith("/cards/settings")) return "5.10";
	if (path.startsWith("/cards/admin")) return "5.9";
	if (path.startsWith("/cards/analytics")) return "5.8";
	if (path.startsWith("/cards/security")) return "5.7";
	if (path.startsWith("/cards/corporate")) return "5.6";
	if (path.startsWith("/cards/prepaid")) return "5.5";
	if (path.startsWith("/cards/credit")) return "5.4";
	if (path.startsWith("/cards/virtual")) return "5.3";
	if (path.startsWith("/cards/physical")) return "5.2";
	return "5.1";
}

/**
 * Hook that returns a `navigateTo(pageId, anchor?)` callback matching
 * the existing `setPage` + scroll contract used throughout the app.
 */
export function useCardsNavigate() {
	const navigate = useNavigate();

	return useCallback(
		(page: CardsPageId | string, anchor?: string) => {
			const id = page as CardsPageId;
			const to = CARDS_PAGE_PATH[id] ?? CARDS_PAGE_PATH["5.1"];
			navigate({ to, hash: anchor || undefined });
			window.scrollTo(0, 0);
			if (anchor) {
				window.setTimeout(() => {
					document
						.getElementById(anchor)
						?.scrollIntoView({ behavior: "smooth", block: "start" });
				}, 120);
			}
		},
		[navigate],
	);
}