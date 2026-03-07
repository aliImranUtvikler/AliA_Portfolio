package org.alia.portfolio.pages.project

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.css.FontWeight
import com.varabyte.kobweb.compose.foundation.layout.Box
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.foundation.layout.Row
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
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.style.base
import com.varabyte.kobweb.silk.style.toModifier
import com.varabyte.kobweb.compose.css.ObjectFit
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.css.vh
import org.jetbrains.compose.web.dom.Div
import org.jetbrains.compose.web.dom.Text
import org.jetbrains.compose.web.dom.Video
import org.jetbrains.compose.web.dom.Iframe
import org.jetbrains.compose.web.dom.Hr
import org.alia.portfolio.components.layouts.PageLayoutData
import org.alia.portfolio.components.sections.defaultProjects
import org.alia.portfolio.HeadlineTextStyle

val ProjectGridStyle = CssStyle {
    base {
        Modifier
            .fillMaxWidth()
            .styleModifier {
                property("display", "grid")
                property("gap", "2rem")
                property("grid-template-columns", "minmax(0, 1fr)")
                property("grid-template-areas", "\"title\" \"pitch\" \"video\" \"meta\"")
            }
    }
    Breakpoint.MD {
        Modifier
            .styleModifier {
                property("gap", "4rem")
                property("grid-template-columns", "minmax(0, 1fr) minmax(0, 1fr)")
                property("grid-template-areas", "\"video title\" \"video pitch\" \"video meta\"")
            }
    }
}

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

    Column(Modifier.fillMaxWidth().minHeight(100.vh).padding(top = 4.cssRem, bottom = 4.cssRem).gap(6.cssRem)) {
        if (project == null) {
            Div(Modifier.fontSize(2.cssRem).color(Colors.White).toAttrs()) {
                SpanText("Prosjektet ble ikke funnet.")
            }
        } else {
            // Hovedseksjon (Mobil: CSS Grid ordner rekkefølgen automatisk! Desktop: Venstre/høyre)
            Div(ProjectGridStyle.toModifier().toAttrs()) {
                
                // Video (Settes til grid-area "video")
                if (project.heroVideoUrl != null) {
                    Box(Modifier.fillMaxWidth().styleModifier { property("grid-area", "video") }) {
                        if (project.heroVideoUrl.contains("tiktok.com")) {
                            val videoId = project.heroVideoUrl.substringAfterLast("/")
                            Iframe(
                                attrs = {
                                    attr("src", "https://www.tiktok.com/embed/v2/$videoId")
                                    style {
                                        property("width", "100%")
                                        property("height", "80vh") // Begrenser høyden for mobil
                                        property("border", "none")
                                        property("border-radius", "0.5rem")
                                    }
                                }
                            )
                        } else {
                            Video(
                                attrs = {
                                    attr("src", project.heroVideoUrl)
                                    attr("controls", "") // Viser avspillingskontroller
                                    val posterUrl = project.heroVideoPosterUrl ?: project.coverImage
                                    attr("poster", posterUrl)
                                    style {
                                        property("width", "100%")
                                        property("max-height", "80vh") // Begrenser høyden for mobil
                                        property("object-fit", "contain") // Beholder originalt sideforhold
                                        property("border-radius", "0.5rem")
                                    }
                                }
                            )
                        }
                    }
                } else {
                    // Fallback hvis video mangler
                    Image(
                        src = project.coverImage,
                        modifier = Modifier.fillMaxWidth()
                            .styleModifier { 
                                property("border-radius", "0.5rem") 
                                property("grid-area", "video")
                            }
                    )
                }

                // Titler (grid-area "title")
                Column(Modifier.gap(0.5.cssRem).fillMaxWidth().styleModifier { property("grid-area", "title") }) {
                    Div(Modifier.fontSize(2.5.cssRem).fontWeight(FontWeight.Bold).color(Colors.White).styleModifier { 
                        property("overflow-wrap", "break-word")
                        property("word-break", "break-word")
                    }.toAttrs()) {
                        Text(project.title)
                    }
                    Div(Modifier.fontSize(1.2.cssRem).color(Colors.Gray).toAttrs()) {
                        Text(project.subtitle)
                    }
                }

                // Om sluttproduktet (Pitch) (grid-area "pitch")
                Div(Modifier.fontSize(1.1.cssRem).lineHeight(1.6).color(Colors.White).fillMaxWidth().styleModifier { property("grid-area", "pitch") }.toAttrs()) {
                    Text(project.pitch)
                }

                // Metainfo-boks (grid-area "meta")
                Column(Modifier.fillMaxWidth().gap(1.cssRem).styleModifier { property("grid-area", "meta") }) {
                    Hr(Modifier.fillMaxWidth().color(Colors.DarkGray).toAttrs())
                    
                    Column(Modifier.gap(0.5.cssRem)) {
                            MetaLine("SELSKAP", project.company)
                            MetaLine("VERKTØY", project.tools)
                            MetaLine("METODE", project.method)
                        }
                        
                    Hr(Modifier.fillMaxWidth().color(Colors.DarkGray).toAttrs())
                }
            }

            // "Fra produksjonen" seksjon
            if (project.processImage != null || project.processDescription != null) {
                Column(Modifier.fillMaxWidth().gap(1.cssRem)) {
                    
                    // Seksjonstittel med mindre luft
                    Div(Modifier.fontSize(2.cssRem).fontWeight(FontWeight.Bold).color(Colors.White).toAttrs()) {
                        Text("Fra produksjonen")
                    }

                    // Vi bruker standard CSS Grid her også for stabilitet
                    Div(Modifier.fillMaxWidth().gap(2.cssRem).styleModifier {
                        property("display", "grid")
                        property("grid-template-columns", "repeat(auto-fit, minmax(300px, 1fr))")
                    }.toAttrs()) {
                        
                        // Venstre: Bredt bilde
                        if (project.processImage != null) {
                            Image(
                                src = project.processImage,
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .objectFit(ObjectFit.Cover)
                                    .styleModifier { property("border-radius", "0.5rem") }
                            )
                        } else {
                            Box(Modifier) // Tom holder hvis mangler
                        }

                        // Høyre: Slik ble det til
                        if (project.processDescription != null) {
                            Column(Modifier.gap(1.cssRem)) {
                                Div(Modifier.fontSize(1.2.cssRem).fontWeight(FontWeight.SemiBold).color(Colors.White).toAttrs()) {
                                    Text("Slik ble det til:")
                                }
                                Div(Modifier.fontSize(1.1.cssRem).lineHeight(1.6).color(Colors.White).toAttrs()) {
                                    Text(project.processDescription)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// Hjelpefunksjon for å tegne en linje i meta-boksen slik at det blir superlett å lese og redigere
@Composable
private fun MetaLine(label: String, value: String) {
    Row(Modifier.fillMaxWidth().gap(1.cssRem)) {
        Div(Modifier.minWidth(7.cssRem).fontWeight(FontWeight.Bold).color(Colors.Gray).fontSize(0.9.cssRem).toAttrs()) {
            Text("$label:")
        }
        Div(Modifier.color(Colors.White).fontSize(0.9.cssRem).toAttrs()) {
            Text(value)
        }
    }
}
