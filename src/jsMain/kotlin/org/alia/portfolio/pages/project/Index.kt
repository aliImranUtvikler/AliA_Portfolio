package org.alia.portfolio.pages.project

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.rememberPageContext
import com.varabyte.kobweb.core.data.add
import com.varabyte.kobweb.core.init.InitRoute
import com.varabyte.kobweb.core.init.InitRouteContext
import com.varabyte.kobweb.core.layout.Layout
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.compose.css.ObjectFit
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.dom.Div
import org.alia.portfolio.components.layouts.PageLayoutData
import org.alia.portfolio.components.sections.defaultProjects
import org.alia.portfolio.HeadlineTextStyle
import org.alia.portfolio.SubheadlineTextStyle

@InitRoute
fun initProjectPage(ctx: InitRouteContext) {
    ctx.data.add(PageLayoutData("Prosjekt Detaljer"))
}

@Page
@Layout("org.alia.portfolio.components.layouts.PageLayout")
@Composable
fun ProjectPage() {
    val ctx = rememberPageContext()
    val projectId = ctx.route.params["id"]
    val project = defaultProjects.find { it.id == projectId }

    Column(Modifier.fillMaxWidth().minHeight(100.vh).padding(top = 4.cssRem, bottom = 4.cssRem).gap(4.cssRem)) {
        if (project == null) {
            Div(Modifier.fontSize(2.cssRem).color(Colors.White).toAttrs()) {
                SpanText("Prosjektet ble ikke funnet.")
            }
        } else {
            // Hero Title
            Column(Modifier.gap(1.cssRem)) {
                Div(HeadlineTextStyle.toModifier().toAttrs()) {
                    SpanText(project.title)
                }
                Div(SubheadlineTextStyle.toModifier().toAttrs()) {
                    SpanText(project.description)
                }
            }

            // Cover Media
            Image(
                src = project.coverImage,
                description = project.title,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(60.vh)
                    .objectFit(ObjectFit.Cover)
                    .styleModifier { property("border-radius", "0.5rem") }
            )

            // Dynamic Media List (placeholder for future multiple images/videos)
            if (project.mediaUrls.isNotEmpty()) {
                Column(Modifier.gap(2.cssRem)) {
                    project.mediaUrls.forEach { url ->
                        Image(
                            src = url,
                            modifier = Modifier.fillMaxWidth().objectFit(ObjectFit.Cover).styleModifier { property("border-radius", "0.5rem") }
                        )
                    }
                }
            }
        }
    }
}
