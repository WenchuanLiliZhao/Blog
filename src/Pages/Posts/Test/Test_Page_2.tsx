import Fig from "../../_Templates/Layouts/InArticle/Fig";
import Template_Page from "../../_Templates/Template_Page";
import Author_Shu from "../../Authors/Author_Shu";
import Author_Wenchuan from "../../Authors/Author_Wenchuan";

const brief = `
It is impossible to establish a formal theory in which every term is formally defined in the language of the theory. In other words, no formal theory can be entirely unambiguous. Otherwise, if such a theory existed, it would either start from a set of circular definitions or an infinite chain of definitions. This is a fundamental limitation in the nature of formal theories.
`


const content = [
  `
## Primitive Notions

It is impossible to establish a formal theory in which every term is formally defined in the language of the theory. In other words, no formal theory can be entirely unambiguous. Otherwise, if such a theory existed, it would either start from a set of circular definitions or an infinite chain of definitions. This is a fundamental limitation in the nature of formal theories.


| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1 Cell 1 | Row 1 Cell 2 | Row 1 Cell 3 |
| Row 2 Cell 1 | Row 2 Cell 2 | Row 2 Cell 3 |

As a compromise, every formal theory begins with a set of undefined terms. We call these terms **primitive notions** of the theory.

In ancient times, the existence of primitive notions was often overlooked. For example, at the first glance, Euclid’s book *Elements* seems like an extensive discussion on a collection of unambiguously defined notions such as “point,”  “line,” “plane,” etc. However, from a modern perspective, some terms are not well-defined but tacitly adopted in the system. Take the definition of points for example:

> A **point** is that which has no part.

This conveys an intuitive idea of a point being an indivisible entity. But, what exactly the term “part” means? The author does not provide any explanation.

Modern treatments tend to adopt “point” as a primitive notion in Euclid’s system, making the system appear more concise.

In 1899, David Hilbert delivered a lecture on Euclid's *Elements*, which was later published as the book *Grundlagen der Geometrie* (the *Foundation of Geometry*). It provides a modern treatment on Euclidean geometry, demonstrating an axiomatization with six primitive notions:

1. points,
2. lines,
3. plane,
4. betweenness,
5. lies on,
6. congruence.

Points, lines and planes are the **primitive objects** in the system. In Hilbert’s words, they are the elements of three-dimensional Euclidean geometry. Betweenness, “lies on,” and congruence are the **primitive relations** whose variables range over all primitive objects. Complex geometric entities, such as rays, angles, triangles, circles, and cubes, are considered systems of primitive objects rather than individual objects.

According to Hilbert's axiomatization, the system introduced in Euclid's *Elements* can be considered a first-order axiomatization in a modern perspective. That is, in a loose, intuitive understanding, each proposition can be represented as a string of symbols including logic symbols. For example, Axiom I.1 in the book:

> Two distinct points $A$ and $B$ always completely determine a straight line $a$. We write $AB = a$ or $BA = a$.

It can be written in symbols as:
$$
\\begin{aligned}
\\forall A\\; \\forall B \\; ( &\\mathrm{Pt}(A) \\land \\mathrm{Pt}(B) \\land A \\ne B \\\\
&\\iff \\exists ! a \\; ( \\mathrm{Ln}(a) \\land \\mathrm{On}(A,a) \\land \\mathrm{On}(B,a) )),
\\end{aligned}
$$
where $\\mathrm{Pt}(A)$ denotes “$A$ is a point,” $\\mathrm{Ln}(a)$ denotes “$a$ is a line,” and $\\mathrm{On}(A,a)$ denotes “$A$ lies on $a$.”
`,

  <Fig src={"https://i.pinimg.com/control/564x/9a/5c/24/9a5c247c8cb8995ed5c970397e74af45.jpg"} title={"img"} caption={`ss $x$ **aa**`} />,

  `
$x = 1$

$$
\\begin{aligned}
\\forall x \\; \\forall y \\; \\forall z \\; ((z \\in x \\Leftrightarrow z \\in y) \\implies x = y)
\\end{aligned}
$$
`,
];

const Page_Test_2: Template_Page = {
  info: {
    title: "Why Do We Build the Wall?",
    key: "page test 2",
    cover: "https://i.pinimg.com/1200x/32/f5/ad/32f5ad100f4298e08fd54aa09c6e049a.jpg",
    latest_update: [2024, 9, 4],
    brief: brief,
    authors: [
      {
        data: Author_Wenchuan,
      },

      {
        data: Author_Shu,
      }
    ],

    tags: ["a", "bbb", "ccc"],
    type: "Article",
    label: ""
  },
  content: content,
};

export default Page_Test_2;
