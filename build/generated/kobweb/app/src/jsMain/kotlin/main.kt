@file:Suppress(
    "RETURN_VALUE_NOT_USED",
    "RETURN_VALUE_NOT_USED_COERCION",
)

import androidx.compose.runtime.Composable
import androidx.compose.runtime.ProvidableCompositionLocal
import androidx.compose.runtime.compositionLocalOf
import com.varabyte.kobweb.core.AppGlobals
import com.varabyte.kobweb.navigation.BasePath
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.navigation.UpdateHistoryMode
import com.varabyte.kobweb.navigation.remove
import com.varabyte.kobweb.silk.defer.DeferringHost
import kotlin.Any
import kotlin.Suppress
import kotlin.Unit
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable
import org.alia.portfolio.components.layouts.MarkdownLayout as _org_alia_portfolio_components_layouts_MarkdownLayout
import org.alia.portfolio.components.layouts.PageLayout as _org_alia_portfolio_components_layouts_PageLayout
import org.alia.portfolio.pages.HomePage as _org_alia_portfolio_pages_HomePage
import org.alia.portfolio.pages.project.ProjectPage as _org_alia_portfolio_pages_project_ProjectPage

private val LayoutScopeLocal: ProvidableCompositionLocal<Any?> = compositionLocalOf<Any?> { null }

@Composable
private fun <T : Any> currentLayoutScope(): T {
    @Suppress("UNCHECKED_CAST")
    return LayoutScopeLocal.current as? T
        ?: error("Unexpected between Page/Layout scope and the parent Layout which it is providing it. Please report this issue to the Kobweb developers.")
}

@Composable
private fun <T : Any> provideLayoutScope(layoutScope: T, content: @Composable () -> Unit) {
    androidx.compose.runtime.CompositionLocalProvider(LayoutScopeLocal provides layoutScope, content = content)
}

public fun main() {
    AppGlobals.initialize(mapOf("title" to "${'$'}{projectTitle}"))
    BasePath.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.registerLayout(
            "org.alia.portfolio.components.layouts.MarkdownLayout",
            parentLayoutId = "org.alia.portfolio.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                org.alia.portfolio.components.layouts.initMarkdownLayout(ctx)
            },
        ) { pageCtx, pageMethod -> 
            _org_alia_portfolio_components_layouts_MarkdownLayout {
                pageMethod(pageCtx)
            }
        }
        ctx.router.registerLayout(
            "org.alia.portfolio.components.layouts.PageLayout",
        ) { pageCtx, pageMethod -> 
            _org_alia_portfolio_components_layouts_PageLayout(pageCtx) {
                provideLayoutScope(this) {
                    pageMethod(pageCtx)
                }
            }
        }
        ctx.router.register(
            "/",
            layoutId = "org.alia.portfolio.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                org.alia.portfolio.pages.initHomePage(ctx)
            },
        ) { pageCtx -> 
            _org_alia_portfolio_pages_HomePage()
        }
        ctx.router.register(
            "/project/",
            layoutId = "org.alia.portfolio.components.layouts.PageLayout",
            initRouteMethod = { ctx ->
                org.alia.portfolio.pages.project.initProjectPage(ctx)
            },
        ) { pageCtx -> 
            _org_alia_portfolio_pages_project_ProjectPage()
        }

    }
    router.addRouteInterceptor {
        path = path.removeSuffix(".html").removeSuffix(".htm")
    }

    com.varabyte.kobweb.silk.init.additionalSilkInitialization = { ctx ->
        com.varabyte.kobweb.silk.init.initSilkWidgets(ctx)
        com.varabyte.kobweb.silk.init.initSilkWidgetsKobweb(ctx)
        ctx.theme.registerStyle("headline-text", org.alia.portfolio.HeadlineTextStyle)
        ctx.theme.registerStyle("subheadline-text", org.alia.portfolio.SubheadlineTextStyle)
        ctx.theme.registerStyle("footer", org.alia.portfolio.components.sections.FooterStyle)
        ctx.theme.registerStyle("hero-background", org.alia.portfolio.components.sections.HeroBackgroundStyle)
        ctx.theme.registerStyle("nav-header", org.alia.portfolio.components.sections.NavHeaderStyle)
        ctx.theme.registerStyle("project-card", org.alia.portfolio.components.sections.ProjectCardStyle)
        ctx.theme.registerStyle("body-of-work-grid", org.alia.portfolio.components.sections.BodyOfWorkGridStyle)
        ctx.theme.registerStyle("markdown", org.alia.portfolio.components.layouts.MarkdownStyle)
        ctx.theme.registerStyle("page-content", org.alia.portfolio.components.layouts.PageContentStyle)
        ctx.theme.registerVariant("-circle", org.alia.portfolio.CircleButtonVariant
        )
        ctx.theme.registerVariant("-uncolored", org.alia.portfolio.UncoloredButtonVariant
        )
        org.alia.portfolio.initSiteStyles(ctx)
        org.alia.portfolio.initColorMode(ctx)
        org.alia.portfolio.initStyles(ctx)
        org.alia.portfolio.initTheme(ctx)
    }

    // Dedup any leading slashes after removing the origin, just in case someone typed
    // something like `https://site.com//about` by accident. If we pass `//about` into
    // `tryRoutingTo`, Kobweb will reject it as a protocol-relative URL; instead, we
    // want it to navigate to `/about`
    router.tryRoutingTo(BasePath.remove("/" + window.location.href.removePrefix(window.origin).trimStart('/')), UpdateHistoryMode.REPLACE)

    // For SEO, we may bake the contents of a page in at build time. However, we will
    // overwrite them the first time we render this page with their composable, dynamic
    // versions. Think of this as poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("_kobweb-root")!!
    while (root.firstChild != null) { root.removeChild(root.firstChild!!) }

    renderComposable(rootElementId = "_kobweb-root") {
        org.alia.portfolio.AppEntry {
            router.renderActivePage { DeferringHost { it() } }
        }
    }
}
