package org.alia.portfolio.components.sections

import androidx.compose.runtime.*
import com.varabyte.kobweb.browser.dom.ElementTarget
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.foundation.layout.Spacer
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.icons.MoonIcon
import com.varabyte.kobweb.silk.components.icons.SunIcon
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.navigation.UncoloredLinkVariant
import com.varabyte.kobweb.silk.components.navigation.UndecoratedLinkVariant
import com.varabyte.kobweb.silk.components.overlay.PopupPlacement
import com.varabyte.kobweb.silk.components.overlay.Tooltip
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.base
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import org.jetbrains.compose.web.css.*
import org.alia.portfolio.components.widgets.IconButton

val NavHeaderStyle = CssStyle.base {
    Modifier.fillMaxWidth().padding(topBottom = 2.cssRem, leftRight = 1.cssRem)
}

@Composable
private fun NavLink(path: String, text: String) {
    Link(path, text, variant = UndecoratedLinkVariant.then(UncoloredLinkVariant), modifier = Modifier.fontWeight(FontWeight.Bold).letterSpacing(1.px))
}

@Composable
private fun ColorModeButton() {
    var colorMode by ColorMode.currentState
    IconButton(onClick = { colorMode = colorMode.opposite }) {
        if (colorMode.isLight) MoonIcon() else SunIcon()
    }
    Tooltip(ElementTarget.PreviousSibling, "Toggle color mode", placement = PopupPlacement.BottomRight)
}

@Composable
fun NavHeader() {
    Row(NavHeaderStyle.toModifier(), verticalAlignment = Alignment.CenterVertically) {
        // Logo / Name
        Link(
            path = "/",
            variant = UndecoratedLinkVariant.then(UncoloredLinkVariant),
            modifier = Modifier.fontWeight(FontWeight.Bolder).fontSize(1.5.cssRem)
        ) {
            SpanText("AI Ali", Modifier.fontWeight(FontWeight.Bold).fontSize(1.2.cssRem).letterSpacing(2.px))
        }

        Spacer()

        Row(Modifier.gap(2.cssRem), verticalAlignment = Alignment.CenterVertically) {
            NavLink("mailto:imran.jobb@gmail.com", "KONTAKT")
        }
    }
}
