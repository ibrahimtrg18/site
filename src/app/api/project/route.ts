import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: {
      projects: [
        // Company Work
        {
          name: "Delman Data Lab",
          type: "WORK",
          url: "https://delman.io",
          image: "delman.png",
          description: "I work as Software Engineer, Frontend.",
        },
        {
          name: "Prixa",
          type: "WORK",
          url: "https://home.prixa.ai/?pId=817d1193-f4ce-439e-b357-16466695d970&appId=0a7c0983-f8d1-448d-aedc-efaec455f2a3",
          image: "prixa.png",
          description: "I work as Frontend Engineer",
          todos: [
            "1. Develop feature for User [Prixa Gejala, Consultation chat with Doctor]",
            "2. Fixings reports bugs from QAs",
            "3. Break down ticket for frontend engineer",
          ],
        },
        {
          name: "Prixa Library (Antibody)",
          type: "WORK",
          url: "https://antibody-vue3.netlify.app/",
          image: "prixa.png",
          description: "I work as Frontend Engineer",
          todos: [
            "1. Develop reusable components [Appbar, Avatar, Button, Checkbox Input, Radio, Switch, Textarea, ]",
            "2. Create documentation for component",
            "3. Fixings reports bugs from QAs",
          ],
        },
        {
          name: "Prixa Teleconsultation",
          type: "WORK",
          url: "https://telekonsultasi.prixa.ai",
          image: "prixa-telekonsultasi.png",
          description: "I work as Frontend Engineer",
          todos: [
            "1. Develop feature for Doctor [Consultation chat with User, Template chats, shift doctor]",
            "2. Fixings reports bugs from QAs",
          ],
        },
        {
          name: "Prixa Dashboard",
          type: "WORK",
          url: "https://internal-dashboard.prixa.ai",
          image: "prixa-dashboard.png",
          description: "I work as Frontend Engineer",
          todos: [
            "1. Develop feature for Internal System [Company, Template Chat Doctor]",
            "2. Fixings reports bugs from QAs",
          ],
        },
        {
          name: "Cititex",
          type: "WORK",
          url: "https://www.cititex.com",
          image: "cititex.png",
          description: "I work as Frontend Engineer",
          todos: [
            "1. Develop feature for E commerce website [Start Design, Home, Product, Detail Product, About, Contact, Sidepanel Cart, Order Items, Payment with Midtrans]",
            "2. Fixings reports bugs",
          ],
        },
        {
          name: "Cititex Dashboard Master",
          type: "WORK",
          url: "http://18.136.190.112/testing/master/dashboard",
          image: "cititex-dashboard-master.png",
          description: "I work as Frontend Engineer",
          todos: [
            "1. Develop feature for Internal Admin website [Product Detail, Finance]",
            "2. Fixings reports bugs",
          ],
        },
        {
          name: "Cititex Dashboard Local",
          type: "WORK",
          url: "http://18.136.190.112/testing/cititex/dashboard-local",
          image: "cititex-dashboard-local.png",
          description: "I work as Frontend Engineer",
          todos: [
            "1. Develop feature for Internal Admin website [Employees, Stock Products, Attendance, Local Order]",
            "2. Fixings reports bugs",
          ],
        },
        // Personal Work
        {
          name: "Talkyu",
          type: "PERSONAL",
          url: "http://talkyu.ibrahimtarigan.me/openapi",
          image: "talkyu.png",
        },
        {
          name: "Daily News",
          type: "PERSONAL",
          url: "http://daily-news.ibrahimtarigan.me",
          image: "daily-news.png",
        },
        {
          name: "Movie DB",
          type: "PERSONAL",
          url: "https://movie-ibrahim.vercel.app",
          image: "movie-db.png",
        },
        {
          name: "Landing page example",
          type: "PERSONAL",
          url: "https://landing-page-indonesia.vercel.app",
          image: "landing-page-example.png",
        },
        {
          name: "Todo",
          type: "PERSONAL",
          url: "https://ibrahim-todo.vercel.app",
          image: "todo.png",
        },
        {
          name: "Dinner Journey",
          type: "PERSONAL",
          url: "https://dinner-jurney.vercel.app",
          image: "dinner-journey.png",
        },
        {
          name: "My Route",
          type: "PERSONAL",
          url: "http://myroute.ibrahimtarigan.me/",
          image: "my-route.png",
        },
        {
          name: "Dota 2 PWA",
          type: "PERSONAL",
          url: "https://pwa-dota2.vercel.app",
          image: "pwa-dota2.png",
        },
      ],
    },
  });
}
