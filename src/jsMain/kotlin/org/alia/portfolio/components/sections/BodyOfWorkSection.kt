package org.alia.portfolio.components.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.base
import com.varabyte.kobweb.silk.style.toModifier
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.dom.Div
import com.varabyte.kobweb.compose.ui.styleModifier
import org.jetbrains.compose.web.css.*
import org.alia.portfolio.models.Project
import org.alia.portfolio.HeadlineTextStyle
import com.varabyte.kobweb.silk.components.text.SpanText

val BodyOfWorkGridStyle = CssStyle.base {
    Modifier
        .fillMaxWidth()
        .styleModifier { 
            property("display", "grid") 
            property("grid-template-columns", "repeat(auto-fill, minmax(300px, 1fr))")
        }
        .gap(3.cssRem)
}

// Default mock projects for layout demonstration
val defaultProjects = listOf(
    Project(
        id = "revira-promo",
        title = "Instruksjonsvideo for Revira",
        subtitle = "Oppdrag",
        pitch = "Revira AS leverer naturlig avskrekkingsmiddel for skadedyr, og hadde behov for en tydelig måte å forklare påføringsprosessen av middelet på. Jeg utviklet en skreddersydd 9:16 instruksjonsvideo hvor alt fra det visuelle universet til fortellerstemmen er skapt med KI. Resultatet er en moderne video som bryter ned komplekse instrukser til noe som er lett å forstå.",
        company = "Revira AS",
        tools = "Midjourney, Kling AI, CapCut, Canva, ElevenLabs",
        method = "Inkrementell (Smidig)",
        coverImage = "/images/projects/revira-cover.png",
        heroVideoUrl = "/video/projects/Revira_P_small.mp4",
        heroVideoPosterUrl = "/video/projects/Revira_P_small-Cover.jpg",
        processImage = "/images/projects/revira-sand-process.png",
processDescription = "Arbeidsprosessen var bygget opp rundt en smidig og inkrementell metode. Det visuelle grunnlaget ble generert i Midjourney, før bildene ble gitt liv og flytende bevegelser ved hjelp av Kling AI. For å sikre en profesjonell og pedagogisk tone, ble fortellerstemmen syntetisert i ElevenLabs. Til slutt ble alle elementene satt sammen, klippet og optimalisert med teksting i CapCut og Canva for å sikre maksimal effekt på mobile flater."    ),
    Project(
        id = "lys-refleksjon",
        title = "Lys Refleksjon",
        subtitle = "Visuell Film",
        pitch = "En dynamisk reise i lys og skygge.",
        company = "Film Collective",
        tools = "Stable Diffusion",
        method = "Eksperimentell",
        coverImage = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
        heroVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"
    ),
    Project(
        id = "skygge-dybde",
        title = "Skygge Dybde",
        subtitle = "Minimalistisk",
        pitch = "Utforskning av fravær av farge.",
        company = "Studio Minimal",
        tools = "Runway Gen-2",
        method = "Iterativ",
        coverImage = "https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&w=600&q=80"
    ),
    Project(
        id = "katten-svinger",
        title = "Katten Svinger på tur",
        subtitle = "Kort, slående tekst som beskriver sluttproduktet du har levert, hva målet var, og verdien det skapte.",
        pitch = "Utforskning av fravær av farge.",
        company = "AliA",
        tools = "Runway Gen-2",
        method = "Iterativ",
        coverImage = "https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&w=600&q=80"
    )
)

@Composable
fun BodyOfWorkSection(projects: List<Project> = defaultProjects) {
    Column(Modifier.fillMaxWidth().padding(top = 4.cssRem, bottom = 4.cssRem)) {
        Div(HeadlineTextStyle.toModifier().margin(bottom = 2.cssRem).toAttrs()) {
            SpanText("Showcase")
        }
        Div(BodyOfWorkGridStyle.toModifier().toAttrs()) {
            projects.forEach { project ->
                ProjectCard(project)
            }
        }
    }
}
