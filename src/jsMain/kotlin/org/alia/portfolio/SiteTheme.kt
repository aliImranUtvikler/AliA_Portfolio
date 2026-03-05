package org.alia.portfolio

import com.varabyte.kobweb.compose.ui.graphics.Color
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.silk.init.InitSilk
import com.varabyte.kobweb.silk.init.InitSilkContext
import com.varabyte.kobweb.silk.theme.colors.ColorMode
import com.varabyte.kobweb.silk.theme.colors.palette.background
import com.varabyte.kobweb.silk.theme.colors.palette.color

class SitePalette(
    val nearBackground: Color,
    val primaryText: Color,
    val secondaryText: Color,
    val border: Color
)

object SitePalettes {
    val light = SitePalette(
        nearBackground = Color.rgb(0xF5F5F5), // Light Gray
        primaryText = Colors.Black,
        secondaryText = Color.rgb(0x666666), // Medium Gray
        border = Color.rgb(0xE0E0E0)
    )
    val dark = SitePalette(
        nearBackground = Color.rgb(0x111111), // Very Dark Gray
        primaryText = Colors.White,
        secondaryText = Color.rgb(0x999999), // Light Gray
        border = Color.rgb(0x333333)
    )
}

fun ColorMode.toSitePalette(): SitePalette {
    return when (this) {
        ColorMode.LIGHT -> SitePalettes.light
        ColorMode.DARK -> SitePalettes.dark
    }
}

@InitSilk
fun initTheme(ctx: InitSilkContext) {
    ctx.theme.palettes.light.background = Colors.White
    ctx.theme.palettes.light.color = Colors.Black
    ctx.theme.palettes.dark.background = Colors.Black
    ctx.theme.palettes.dark.color = Colors.White
}
