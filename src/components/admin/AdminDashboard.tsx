import { useMemo, useState } from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'Manchester United Home Jersey',
    category: 'New Season',
    stock: 18,
    price: 4500,
    image:
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Retro Brazil 2002',
    category: 'Retro Kits',
    stock: 10,
    price: 5300,
    image:
      'https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'PSG Training Kit',
    category: 'Training Wear',
    stock: 26,
    price: 3800,
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop',
  },
];

const initialOrders = [
  {
    id: '#ORD-1001',
    customer: 'Brian Ouma',
    product: 'Arsenal Home Jersey 24/25',
    amount: 'KES 4,500',
    status: 'Completed',
  },
  {
    id: '#ORD-1002',
    customer: 'Kevin Maina',
    product: 'Retro AC Milan Kit',
    amount: 'KES 5,800',
    status: 'Pending',
  },
  {
    id: '#ORD-1003',
    customer: 'Sharon Akinyi',
    product: 'Chelsea Away Kit',
    amount: 'KES 4,900',
    status: 'Processing',
  },
  {
    id: '#ORD-1004',
    customer: 'Dennis Kariuki',
    product: 'Barcelona Third Kit',
    amount: 'KES 5,100',
    status: 'Completed',
  },
];

const navItems = [
  'Dashboard',
  'Products',
  'Collections',
  'Orders',
  'Customers',
  'Analytics',
  'Settings',
];

const collectionsData = [
  {
    id: 1,
    name: 'Retro Kits',
    products: 24,
  },
  {
    id: 2,
    name: 'New Season',
    products: 40,
  },
  {
    id: 3,
    name: 'Special Editions',
    products: 12,
  },
];

const customersData = [
  {
    id: 1,
    name: 'Brian Ouma',
    email: 'brian@gmail.com',
    orders: 12,
  },
  {
    id: 2,
    name: 'Sharon Akinyi',
    email: 'sharon@gmail.com',
    orders: 7,
  },
  {
    id: 3,
    name: 'Kevin Maina',
    email: 'kevin@gmail.com',
    orders: 4,
  },
];

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(initialProducts);
  const [orders] = useState(initialOrders);
  const [collections] = useState(collectionsData);
  const [customers] = useState(customersData);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const dashboardStats = useMemo(() => {
    return [
      {
        title: 'Total Products',
        value: products.length,
        change: '+12%',
      },
      {
        title: 'Orders',
        value: orders.length,
        change: '+8%',
      },
      {
        title: 'Revenue',
        value: 'KES 842K',
        change: '+18%',
      },
      {
        title: 'Customers',
        value: '5,420',
        change: '+21%',
      },
    ];
  }, [products, orders]);

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: 'New Season Real Madrid Kit',
      category: 'Special Kits',
      stock: 12,
      price: 6200,
      image:
        'https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=1200&auto=format&fit=crop',
    };

    setProducts((prev) => [newProduct, ...prev]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      <aside className="hidden lg:flex w-72 border-r border-white/10 bg-black/50 backdrop-blur-xl flex-col">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-3xl font-black tracking-tight">
            PediWa<span className="text-red-500">Jersey</span>
          </h1>

          <p className="text-white/50 text-sm mt-2">
            Admin Dashboard
          </p>
        </div>

        <nav className="flex-1 p-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 font-semibold ${
                item === activePage
                  ? 'bg-red-600 text-white'
                  : 'hover:bg-white/5 text-white/70 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="p-5 border-t border-white/10">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <p className="text-sm text-white/50 mb-2">
              Logged in as
            </p>

            <h3 className="font-bold text-lg">Admin User</h3>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-hidden">
        <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              {activePage}
            </h2>

            <p className="text-white/50 mt-2">
              Manage your ecommerce platform with ease.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm outline-none focus:border-red-500 w-full md:w-72"
            />

            <button
              onClick={addProduct}
              className="bg-red-600 hover:bg-red-700 transition-all duration-300 px-6 py-3 rounded-2xl font-semibold whitespace-nowrap"
            >
              + Add Product
            </button>
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-10 overflow-y-auto h-[calc(100vh-105px)]">
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {dashboardStats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-red-500/30 transition-all duration-300"
              >
                <p className="text-white/50 text-sm mb-4">
                  {stat.title}
                </p>

                <div className="flex items-end justify-between">
                  <h3 className="text-4xl font-black tracking-tight">
                    {stat.value}
                  </h3>

                  <span className="text-emerald-400 text-sm font-semibold">
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </section>

          {activePage === 'Dashboard' && (
            <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-black">Products</h3>
                    <p className="text-white/50 mt-2 text-sm">
                      Manage your jersey inventory.
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-5 rounded-2xl border border-white/5 bg-black/30 p-5"
                    >
                      <div className="flex items-center gap-5">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 rounded-2xl object-cover"
                        />

                        <div>
                          <h4 className="font-bold text-lg mb-2">
                            {product.name}
                          </h4>

                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full font-semibold">
                              {product.category}
                            </span>

                            <span className="text-white/50 text-sm">
                              Stock: {product.stock}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <p className="text-2xl font-black text-red-500">
                          KES {product.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
                <h3 className="text-2xl font-black mb-8">
                  Recent Orders
                </h3>

                <div className="space-y-5">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="rounded-2xl border border-white/5 bg-black/30 p-5"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-white/50">
                          {order.id}
                        </span>

                        <span className="text-xs px-3 py-1 rounded-full font-semibold bg-emerald-500/20 text-emerald-400">
                          {order.status}
                        </span>
                      </div>

                      <h4 className="font-bold mb-2">
                        {order.customer}
                      </h4>

                      <p className="text-white/60 text-sm mb-4">
                        {order.product}
                      </p>

                      <p className="text-xl font-black text-red-500">
                        {order.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activePage === 'Products' && (
            <section className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
              <h3 className="text-3xl font-black mb-8">All Products</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-3xl overflow-hidden border border-white/10 bg-black/30"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 object-cover"
                    />

                    <div className="p-5">
                      <h4 className="font-bold text-xl mb-3">
                        {product.name}
                      </h4>

                      <p className="text-white/50 mb-4">
                        {product.category}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-red-500 font-black text-2xl">
                          KES {product.price.toLocaleString()}
                        </span>

                        <button
                          onClick={() => deleteProduct(product.id)}
                          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activePage === 'Collections' && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <div
                  key={collection.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <h3 className="text-2xl font-black mb-3">
                    {collection.name}
                  </h3>

                  <p className="text-white/50 mb-6">
                    {collection.products} Products
                  </p>

                  <button className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-2xl font-semibold">
                    Manage Collection
                  </button>
                </div>
              ))}
            </section>
          )}

          {activePage === 'Orders' && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-7 overflow-hidden">
              <h3 className="text-3xl font-black mb-8">Orders</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="pb-4">Order ID</th>
                      <th className="pb-4">Customer</th>
                      <th className="pb-4">Product</th>
                      <th className="pb-4">Amount</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-white/5"
                      >
                        <td className="py-5">{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.product}</td>
                        <td>{order.amount}</td>
                        <td>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activePage === 'Customers' && (
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7"
                >
                  <h3 className="text-2xl font-black mb-2">
                    {customer.name}
                  </h3>

                  <p className="text-white/50 mb-5">
                    {customer.email}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-white/70">
                      Orders: {customer.orders}
                    </span>

                    <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm font-semibold">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activePage === 'Analytics' && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
                <h3 className="text-3xl font-black mb-4">Revenue</h3>
                <p className="text-6xl font-black text-red-500 mb-4">
                  KES 842K
                </p>
                <p className="text-emerald-400 font-semibold">
                  +18% this month
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
                <h3 className="text-3xl font-black mb-4">Visitors</h3>
                <p className="text-6xl font-black text-white mb-4">
                  12.4K
                </p>
                <p className="text-emerald-400 font-semibold">
                  +11% this week
                </p>
              </div>
            </section>
          )}

          {activePage === 'Settings' && (
            <section className="rounded-3xl border border-white/10 bg-white/5 p-8 max-w-3xl">
              <h3 className="text-3xl font-black mb-8">Settings</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-white/50 mb-3">
                    Store Name
                  </label>

                  <input
                    type="text"
                    defaultValue="PediWaJersey"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/50 mb-3">
                    Support Email
                  </label>

                  <input
                    type="email"
                    defaultValue="support@pediwajersey.com"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-red-500"
                  />
                </div>

                <button className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl font-semibold">
                  Save Changes
                </button>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
