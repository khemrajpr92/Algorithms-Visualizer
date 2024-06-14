import sort from "./images/sorting.png";
import searching from "./images/searching.jpg";
import stack from "./images/stack.jpg";
import graph from "./images/graph.jpg";

export function getDetails() {
  return [
    {
      id: 1,
      title: "Sorting",
      description: "Compare different sorting algorithms",
      route: "/sort",
      img: sort,
    },
    {
      id: 2,
      title: "Searching",
      description: "Visualize Searching Algorithms",
      route: "/searching",
      img: searching,
    },
    {
      id: 3,
      title: "Stack",
      description: "Visualize Stack Algorithms",
      route: "/stack",
      img: stack,
    },
    {
      id: 4,
      title: "Graph Algorithm",
      description: "Visualize Graph Algorithms",
      route: "/graphTraversal",
      img: graph,
    },
  ];
}
