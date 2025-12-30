🚀 Real-Time Token Dashboard (UI Challenge)

A pixel-accurate, responsive token dashboard inspired by modern crypto analytics platforms.
Built with Next.js + TypeScript, featuring real-time price simulations, smooth color transitions, and multiple interaction patterns.

⏱ Built to match a senior-level UI task (3–4 hrs benchmark) with emphasis on architecture, reusability, and UX polish.

🌐 Live Demo

🔗 Vercel Deployment
👉 https://axiom-replica-vert.vercel.app/

🎥 1–2 min Demo Video (YouTube)
👉 https://youtu.be/SyVY4hTW1qU?si=vKBhOZspfrK1Jf-3

✨ Key Features
📊 Token Tables

1.>New Pairs

2.>Final Stretch

3.>Migrated

Shared, reusable TokenCard component

Category based filtering (no duplicated UI)

⚡ Real-Time Price Updates (WebSocket-like Mock)

setInterval-based simulation

Randomized price movement

Smooth color transitions:

🟢 Green → price up

🔴 Red → price down

🔵 Neutral → stable

```ts
useEffect(() => {
  const id = setInterval(() => {
    setData(prev =>
      prev.map(token => ({
        ...token,
        priceChange: +(Math.random() * 4 - 2).toFixed(2),
      }))
    );
  }, 400);

  return () => clearInterval(id);
}, []);
```
Advanced UI Interactions

Hover states

Click actions

Popovers

Tooltips

Modal-ready structure

Animated price + border color transitions

📱 Fully Responsive (down to 320px)

Desktop: 3-column table layout

Mobile: tab-based responsive table

Auto-layout friendly

No horizontal scroll

Device	Status
Desktop	✅

<img width="1440" height="814" alt="Screenshot 2025-12-30 at 2 42 56 PM" src="https://github.com/user-attachments/assets/d241b725-87c8-4d05-8337-04a3f7d88000" />

Tablet	✅

<img width="1016" height="814" alt="Screenshot 2025-12-30 at 2 43 18 PM" src="https://github.com/user-attachments/assets/26d9416e-9cb0-40cd-919c-befa2117d8ea" />


Mobile (320px)✅

<img width="432" height="814" alt="Screenshot 2025-12-30 at 2 43 32 PM" src="https://github.com/user-attachments/assets/559756d8-0d73-46eb-aa03-e00899c00526" />

*Loading & UX States

->Skeleton loading ready
->Progressive data updates
->Error-safe rendering
->Hydration mismatch avoided using useEffect

🛠 Tech Stack

Next.js (App Router)

TypeScript

Tailwind CSS

Lucide Icons

Vercel

🧩 Design Goals Achieved

✅ Pixel match (≤ 2px deviation)

✅ Reusable architecture

✅ Clean commit history

✅ Senior-level UI polish

✅ Real-time interaction feel

