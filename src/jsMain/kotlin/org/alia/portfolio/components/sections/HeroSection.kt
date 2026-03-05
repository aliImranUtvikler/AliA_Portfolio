package org.alia.portfolio.components.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Alignment
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.graphics.Colors
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.styleModifier
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.components.text.SpanText
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.base
import com.varabyte.kobweb.silk.style.toModifier
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Video
import org.alia.portfolio.HeadlineTextStyle
import org.alia.portfolio.SubheadlineTextStyle

val HeroBackgroundStyle = CssStyle.base {
    Modifier
        .position(Position.Absolute)
        .top(0.px)
        .left(50.percent)
        .width(100.vw)
        .height(100.vh)
        .zIndex(0) // Moved from -1 to 0 so it's above the PageLayout background
        .styleModifier { 
            property("transform", "translateX(-50%)")
            property("overflow", "hidden") 
        }
}

@Composable
fun HeroSection(videoUrl: String) {
    Box(
        Modifier
            .fillMaxWidth()
            .height(100.vh)
            .position(Position.Relative)
            .margin(top = (-4).cssRem), // offset PageLayout padding
        contentAlignment = Alignment.Center
    ) {
        // Video Background
        Box(HeroBackgroundStyle.toModifier()) {
            Video(
                attrs = {
                    attr("src", videoUrl)
                    attr("autoplay", "")
                    attr("loop", "")
                    attr("playsinline", "")
                    attr("muted", "")
                    ref {
                        it.muted = true
                        onDispose {}
                    }
                    style {
                        property("width", "100%")
                        property("height", "100%")
                        property("object-fit", "cover")
                    }
                }
            )
            // Overlay to ensure text readability
            Box(Modifier.fillMaxSize().backgroundColor(Colors.Black.copyf(alpha = 0.5f)))
        }

        // Hero Text Overlay
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .gap(1.cssRem)
                .color(Colors.White)
                .zIndex(1)
        ) {
            Div(HeadlineTextStyle.toModifier().styleModifier { property("text-align", "center") }.toAttrs()) {
                SpanText("Visuell KI-Kreatør & Director")
            }
            Div(SubheadlineTextStyle.toModifier().styleModifier { property("text-align", "center") }.color(Colors.White.copyf(alpha = 0.8f)).toAttrs()) {
                SpanText("Utforsker grensesnittet mellom kunstig intelligens og film.")
            }
        }
    }
}
