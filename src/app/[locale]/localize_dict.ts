const localizedObj = {
  fr: [
    {
      title: "Sa mère lui avait toujours appris",
      body: "Sa mère lui avait toujours appris à ne jamais se considérer comme meilleur que les autres. Il avait essayé de vivre selon cette devise. Il n'avait jamais regardé de haut ceux qui étaient moins fortunés ou qui avaient moins d'argent que lui. Mais la stupidité du groupe de personnes à qui il parlait lui fit changer d'avis.",
    },
    {
      title: "Il était expert mais pas dans une discipline",
      body: "Il était expert mais pas dans une discipline que quelqu'un pourrait vraiment apprécier. Il savait comment tenir le cône juste comme il faut pour que la crème glacée molle tombe dedans à l'angle précis pour former un cône parfait à chaque fois. Cela lui avait pris des années pour le perfectionner et il pouvait maintenant le faire sans même y penser.",
    },
    {
      title: "Dave regardait la forêt brûler sur la colline",
      body: "Dave regardait la forêt brûler sur la colline, à seulement quelques kilomètres de sa maison. La voiture avait été rapidement chargée et Marta était à l'intérieur en train de rassembler les derniers animaux de compagnie. Dave passait en revue sa liste mentale des papiers et documents les plus importants qu'ils ne pouvaient pas laisser derrière eux. Il se reprochait de ne pas les avoir mieux préparés à l'avance et espérait qu'il avait tout ce qu'il fallait. Il continuait à attendre que Marta apparaisse avec les animaux, mais elle n'était toujours pas en vue.",
    },
    {
      title: "Tout ce qu'il voulait, c'était une barre chocolatée",
      body: "Tout ce qu'il voulait, c'était une barre chocolatée. Cela ne semblait pas être une demande difficile à comprendre, mais le commis restait figé et ne semblait pas vouloir répondre à la demande. Cela pouvait avoir quelque chose à voir avec le pistolet pointé sur son visage.",
    },
    {
      title: "Les espoirs et les rêves ont été brisés ce jour-là",
      body: "Les espoirs et les rêves ont été brisés ce jour-là. Cela aurait dû être prévu, mais cela a quand même été un choc. Les signes d'avertissement avaient été ignorés au profit de la possibilité, aussi mince soit-elle, que cela puisse réellement se produire. Cette possibilité était passée de l'espoir à une croyance indéniable qu'il devait s'agir de destin. Jusqu'à ce que ce ne soit pas le cas, et que les espoirs et les rêves s'effondrent.",
    },
    {
      title:
        "Dave n'était pas exactement sûr de la façon dont il s'était retrouvé dans cette situation",
      body: "Dave n'était pas exactement sûr de la façon dont il s'était retrouvé dans cette situation. Il repassait en revue tous les événements qui l'avaient conduit à cette situation actuelle, et cela ne faisait toujours pas sens. Il voulait prendre un peu de temps pour essayer de comprendre tout cela, mais il avait des priorités plus urgentes pour le moment. La première était de savoir comment sortir de sa situation actuelle, étant nu dans un arbre avec la neige qui tombait tout autour et sans moyen de descendre.",
    },
    {
      title: "C'est important de s'en souvenir",
      body: "C'est important de s'en souvenir. L'amour n'est pas comme un gâteau. Vous n'avez pas besoin de le diviser entre tous vos amis et vos proches. Peu importe combien d'amour vous donnez, vous pouvez toujours en donner plus. Il ne s'épuisera pas, alors n'essayez pas de retenir cet amour comme s'il pouvait un jour s'épuiser. Donnez-le librement et autant que vous le souhaitez.",
    },
    {
      title: "On peut cuisiner sur et avec un feu ouvert",
      body: "On peut cuisiner sur et avec un feu ouvert. Voici quelques façons de cuisiner avec le feu à l'extérieur. Faire cuire de la viande à l'aide d'une broche est un excellent moyen de cuire la viande uniformément. Pour éviter que la viande ne brûle, il est préférable de la faire tourner lentement.",
    },
    {
      title: "Il existe différents types de secrets",
      body: "Il existe différents types de secrets. Elle en avait gardé beaucoup tout au long de sa vie, mais celui-ci était différent. Elle se retrouvait à détenir le pire type. C'était le genre de secret qui pouvait vous ronger de l'intérieur si vous ne le disiez pas à quelqu'un, mais qui pouvait aussi vous faire tuer si vous le faisiez.",
    },
    {
      title: "Ils se précipitèrent dehors",
      body: "Ils se précipitèrent dehors, prenant tout ce à quoi ils pouvaient penser dont ils pourraient avoir besoin. Il n'y avait pas le temps de vérifier deux fois pour s'assurer qu'ils n'oubliaient rien d'important. Tout fut jeté dans la voiture et ils partirent en trombe. Trente minutes plus tard, ils étaient en sécurité, et c'est alors qu'ils réalisèrent qu'ils avaient oublié la chose la plus importante de toutes.",
    },
  ],
};

export const localizeDict = (dict: any, locale: string) => {
    //@ts-ignore
    const chosenLocalizedArray = localizedObj[locale];
    const localizedData = dict.map((post:any, index: number) => {
        return {
            title: chosenLocalizedArray[index].title,
            body: chosenLocalizedArray[index].body,
        };
    })
    return localizedData;
};
