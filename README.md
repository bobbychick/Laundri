# LaundriLink - Laundromat Management System

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

A modern, React-based dashboard for laundromat owners to manage delivery orders, track customers, and streamline their laundry service operations.

![LaundriLink Dashboard](https://via.placeholder.com/800x450.png?text=LaundriLink+Dashboard)

## 🚀 Features

- **Order Management**: Create, track, and manage customer orders from pickup to delivery
- **Real-time Delivery Tracking**: Monitor incoming and outgoing deliveries with status updates
- **Customer Database**: Maintain detailed customer information for quick access
- **Responsive Dashboard**: Access your business data from any device
- **Integrated Courier Service**: Connect with delivery services for seamless laundry pickup and drop-off
- **Order History**: Review past transactions and customer patterns

## 📋 Project Structure

```
laundri/
├── src/
│   ├── app/                      # App Router directory
│   │   ├── (auth)/              # Authentication routes
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/         # Dashboard routes
│   │   │   ├── orders/
│   │   │   ├── tracking/
│   │   │   └── customers/
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/              # Reusable components
│   │   ├── ui/                 # UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── layout/             # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── ...
│   │   └── features/           # Feature-specific components
│   │       ├── orders/
│   │       ├── tracking/
│   │       └── customers/
│   ├── lib/                    # Utility functions and configurations
│   │   ├── utils.ts
│   │   ├── api.ts
│   │   └── constants.ts
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-orders.ts
│   │   └── use-tracking.ts
│   └── types/                  # TypeScript type definitions
│       ├── order.ts
│       └── customer.ts
├── public/                     # Static assets
│   ├── images/
│   └── icons/
├── styles/                     # Global styles
│   └── globals.css
└── config/                     # Configuration files
    ├── site.ts
    └── theme.ts
```

## 🛠️ Technology Stack

- **Frontend**: React, TypeScript, Next.js
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons
- **State Management**: React Context API
- **Deployment**: [Your deployment platform]

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/laundri.git
cd laundri
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📱 User Flows

### Complete Order Flow

| Factor               | Order Creation                                                   | Incoming Delivery                                         | Order Processing                                          | Outgoing Delivery                                                   | Order Complete                                             |
| -------------------- | ---------------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Initiating Party** | Customer                                                         | Uber Direct courier                                       | Laundromat staff                                          | Laundromat staff                                                    | System                                                     |
| **Action**           | Places order through app/website selecting services, pickup time | Picks up laundry from customer and delivers to laundromat | Washes, dries, folds, dry cleans items according to order | Requests courier pickup of processed items for delivery to customer | Confirms successful delivery and processes payment         |
| **Result**           | Order created in system with status "Created"                    | Order status updated to "Received at Laundromat"          | Order status changed to "Ready for Delivery"              | Items returned to customer, status updated to "Delivered"           | Order marked as "Complete" and submitted to billing system |

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE.md).

## 💬 Contact

Project Owner - [Jimmy Gao](mailto:james442555@hotmail.com)

Project Link: [https://github.com/yourusername/laundri](https://github.com/yourusername/laundri)

---

⭐️ From [Laundri/bobbychick]
