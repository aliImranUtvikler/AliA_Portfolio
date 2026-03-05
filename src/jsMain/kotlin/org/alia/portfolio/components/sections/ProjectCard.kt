package org.alia.portfolio.components.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.Transition
import com.varabyte.kobweb.compose.css.Cursor
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.ObjectFit
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.navigation.UndecoratedLinkVariant
import com.varabyte.kobweb.silk.components.navigation.UncoloredLinkVariant
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.base
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.style.selectors.hover
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.ms
import org.jetbrains.compose.web.css.percent
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import org.alia.portfolio.models.Project

val ProjectCardStyle = CssStyle {
    base {
        Modifier
            .fillMaxWidth()
            .cursor(Cursor.Pointer)
            .styleModifier { property("transition", "transform 200ms") }
    }
    hover {
        Modifier.scale(1.02)
    }
}

@Composable
fun ProjectCard(project: Project) {
    Link(
        path = "/project?id=${project.id}",
        modifier = ProjectCardStyle.toModifier(),
        variant = UndecoratedLinkVariant.then(UncoloredLinkVariant)
    ) {
        Column(Modifier.gap(0.8.cssRem)) {
            // Cover Image
            Image(
                src = project.coverImage,
                description = project.title,
                modifier = Modifier
                    .fillMaxWidth()
                    // Fixed aspect ratio using traditional padding trick if aspectRatio isn't universally supported,
                    // but Kobweb/Compose HTML often supports aspectRatio CSS.
                    .height(20.cssRem)
                    .objectFit(ObjectFit.Cover)
            )

            // Title
            Div(Modifier.fontSize(1.2.cssRem).fontWeight(FontWeight.SemiBold).toAttrs()) {
                Text(project.title)
            }
        }
    }
}
