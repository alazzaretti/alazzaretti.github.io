// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "A list of my publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have helped teach over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "news-graduated-from-my-m-sc-in-computer-science-at-georgia-tech",
          title: 'Graduated from my M.Sc. in Computer Science at Georgia Tech!',
          description: "",
          section: "News",},{id: "news-started-my-phd-at-yale-fireworks",
          title: 'Started my PhD at Yale! :fireworks:',
          description: "",
          section: "News",},{id: "teaching-graduate-teching-fellow-for-cs3251-newtorking-i",
          title: 'Graduate Teching Fellow for CS3251: Newtorking I',
          description: "",
          section: "Teaching",},{id: "teaching-graduate-teching-fellow-for-cs6260-applied-cryptography",
          title: 'Graduate Teching Fellow for CS6260: Applied Cryptography',
          description: "",
          section: "Teaching",},{id: "teaching-graduate-teching-fellow-for-cpsc513-computer-system-security",
          title: 'Graduate Teching Fellow for CPSC513: Computer System Security',
          description: "",
          section: "Teaching",},{id: "teaching-graduate-teaching-fellow-for-cpsc567-cryptography",
          title: 'Graduate Teaching Fellow for CPSC567: Cryptography.',
          description: "",
          section: "Teaching",},];
