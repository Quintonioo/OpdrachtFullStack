import { Boek } from "../Models/Boek";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Boekservice {
    private boeken: Boek[] = [
    {
        "id": 1,
        "titel": "Introduction to Algorithms",
        "auteur": "Thomas H. Cormen",
        "aantalExemplaren": 5,
        "afbeeldingURL": "https://senxo.nl/wt/books/Algorithms.webp"
    },
    {
        "id": 2,
        "titel": "Clean Code",
        "auteur": "Robert C. Martin",
        "aantalExemplaren": 3,
        "afbeeldingURL": "https://senxo.nl/wt/books/CleanCode.jpg"
    },
    {
        "id": 3,
        "titel": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "auteur": "Erich Gamma",
        "aantalExemplaren": 4,
        "afbeeldingURL": "https://senxo.nl/wt/books/DesignPatterns.jpg"
    },
    {
        "id": 4,
        "titel": "The Pragmatic Programmer",
        "auteur": "Andy Hunt",
        "aantalExemplaren": 6,
        "afbeeldingURL": "https://senxo.nl/wt/books/PragmaticProgrammer.jpg"
    },
    {
        "id": 5,   
        "titel": "Refactoring: Improving the Design of Existing Code",
        "auteur": "Martin Fowler",
        "aantalExemplaren": 2,
        "afbeeldingURL": "https://senxo.nl/wt/books/Refactoring.jpg"
    },
    {
        "id": 6,
        "titel": "Artificial Intelligence: A Modern Approach",
        "auteur": "Stuart Russell",
        "aantalExemplaren": 5,
        "afbeeldingURL": "https://senxo.nl/wt/books/AI.jpg"
    },
    {
        "id": 7,
        "titel": "You Don't Know JS: Scope & Closures",
        "auteur": "Kyle Simpson",
        "aantalExemplaren": 3,
        "afbeeldingURL": "https://senxo.nl/wt/books/JSScope.jpg"
    },
    { 
        "id": 8,
        "titel": "Effective Java",
        "auteur": "Joshua Bloch",
        "aantalExemplaren": 4,
        "afbeeldingURL": "https://senxo.nl/wt/books/EffectiveJava.jpg"
    },
    {
        "id": 9,
        "titel": "Eloquent JavaScript",
        "auteur": "Marijn Haverbeke",
        "aantalExemplaren": 3,
        "afbeeldingURL": "https://senxo.nl/wt/books/EloquentJavaScript.jpg"
        },
    {
        "id": 10,
        "titel": "The Mythical Man-Month: Essays on Software Engineering",
        "auteur": "Frederick P. Brooks Jr.",
        "aantalExemplaren": 2,
        "afbeeldingURL": "https://senxo.nl/wt/books/MythicalMan-Month.jpg"
    },
    {
        "id": 11,
        "titel": "Code Complete",
        "auteur": "Steve McConnell",
        "aantalExemplaren": 5,
        "afbeeldingURL": "https://senxo.nl/wt/books/CodeComplete.jpg"
    },
    {
        "id": 12,
        "titel": "Structure and Interpretation of Computer Programs",
        "auteur": "Harold Abelson",
        "aantalExemplaren": 4,
        "afbeeldingURL": "https://senxo.nl/wt/books/SICP.jpg"
    },
    {
        "id": 14,
        "titel": "We are legion (we are bob)",
        "auteur": "Dennis E. Taylor",
        "aantalExemplaren": 40,
        "afbeeldingURL": "https://senxo.nl/wt/books/bob.jpg"
    },
    {
        "id": 15,
        "titel": "Project Hail Mary",
        "auteur": "Andy Weir",
        "aantalExemplaren": 7,
        "afbeeldingURL": "https://senxo.nl/wt/books/ProjectHailMary.jpg"
    }
    ];

    getBoeken(): Boek[] {
        return this.boeken;
    }

}