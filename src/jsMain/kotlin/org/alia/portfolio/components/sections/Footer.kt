package org.alia.portfolio.components.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.css.TextAlign
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.graphics.Image
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.navigation.UncoloredLinkVariant
import com.varabyte.kobweb.silk.components.navigation.UndecoratedLinkVariant
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.base
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.percent
import org.alia.portfolio.toSitePalette

val FooterStyle = CssStyle.base {
    Modifier
        .fillMaxWidth()
        .padding(topBottom = 2.cssRem, leftRight = 1.cssRem)
}

@Composable
fun Footer(modifier: Modifier = Modifier) {
    Box(FooterStyle.toModifier().then(modifier).backgroundColor(ColorMode.current.toSitePalette().nearBackground), contentAlignment = Alignment.Center) {
        Column(
            Modifier.fillMaxWidth().maxWidth(60.cssRem),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Row(Modifier.gap(2.cssRem).padding(bottom = 1.cssRem)) {
                Link("/", "Hovedsiden", variant = UndecoratedLinkVariant.then(UncoloredLinkVariant))
                Link("/about", "Om", variant = UndecoratedLinkVariant.then(UncoloredLinkVariant))
                Link("mailto:contact@example.com", "Kontakt", variant = UndecoratedLinkVariant.then(UncoloredLinkVariant))
            }
            SpanText("© 2026 AI Ali. Alle rettigheter forbeholdt.", Modifier.fontSize(0.8.cssRem).opacity(50.percent))
        }
    }
}
