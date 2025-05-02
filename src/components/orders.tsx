import {
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter,
  Package,
  Search,
  Truck,
  User,
} from "lucide-react";
import { useState } from "react";

// Sample data for demonstration - expanded from your original dashboard data
const orderHistory = [
  {
    id: "ORD-3421",
    customer: "Alex Johnson",
    address: "423 Maple St",
    status: "Delivered",
    date: "2025-04-22",
    time: "14:30",
    service: "Wash & Fold",
    amount: "$34.50",
  },
  {
    id: "ORD-3420",
    customer: "Sarah Williams",
    address: "128 Oak Ave",
    status: "In Progress",
    date: "2025-04-22",
    time: "11:15",
    service: "Dry Clean",
    amount: "$56.75",
  },
  {
    id: "ORD-3419",
    customer: "Michael Chen",
    address: "892 Pine Blvd",
    status: "Scheduled",
    date: "2025-04-23",
    time: "09:00",
    service: "Wash & Fold",
    amount: "$28.50",
  },
  {
    id: "ORD-3418",
    customer: "Emily Rodriguez",
    address: "742 Cedar Ln",
    status: "Delivered",
    date: "2025-04-21",
    time: "16:45",
    service: "Dry Clean",
    amount: "$42.25",
  },
  {
    id: "ORD-3417",
    customer: "David Kim",
    address: "356 Elm St",
    status: "Delivered",
    date: "2025-04-21",
    time: "10:30",
    service: "Wash & Fold",
    amount: "$31.00",
  },
  {
    id: "ORD-3416",
    customer: "Lisa Thompson",
    address: "219 Birch Ave",
    status: "Cancelled",
    date: "2025-04-20",
    time: "13:00",
    service: "Dry Clean",
    amount: "$0.00",
  },
  {
    id: "ORD-3415",
    customer: "James Wilson",
    address: "734 Aspen Dr",
    status: "Delivered",
    date: "2025-04-20",
    time: "09:15",
    service: "Wash & Fold",
    amount: "$27.50",
  },
  {
    id: "ORD-3414",
    customer: "Maria Garcia",
    address: "495 Walnut St",
    status: "Delivered",
    date: "2025-04-19",
    time: "14:45",
    service: "Rush Wash",
    amount: "$48.25",
  },
];

const OrdersPage = () => {
  const [activeView, setActiveView] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dateFilter, setDateFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter orders based on search, date, and status
  const filteredOrders = orderHistory.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || order.status === statusFilter;

    let matchesDate = true;
    if (dateFilter === "today") {
      matchesDate = order.date === "2025-04-22"; // Assuming today is April 22, 2025
    } else if (dateFilter === "week") {
      // Simple example - in real app you'd do proper date comparison
      matchesDate = ["2025-04-22", "2025-04-21", "2025-04-20", "2025-04-19"].includes(order.date);
    }

    return matchesSearch && matchesStatus && matchesDate;
  });

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setShowOrderDetail(true);
  };

  const handleStatusChange = (orderId, newStatus) => {
    // In a real application, you would update the status in your database
    console.log(`Changing order ${orderId} status to ${newStatus}`);
    // For demo purposes, let's update our local state
    const updatedOrders = orderHistory.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    // In real app, you'd dispatch an action or call an API here
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "In Progress":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "Scheduled":
        return <Calendar className="h-5 w-5 text-yellow-500" />;
      case "Cancelled":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };

  // Order flow steps based on the provided flow document
  const orderFlowSteps = [
    {
      title: "Order Creation",
      description: "Customer places order through app/website",
      icon: <User />,
    },
    {
      title: "Incoming Delivery",
      description: "Courier picks up laundry from customer",
      icon: <Truck />,
    },
    {
      title: "Order Processing",
      description: "Laundry is washed, dried, folded as ordered",
      icon: <Package />,
    },
    {
      title: "Outgoing Delivery",
      description: "Clean items delivered back to customer",
      icon: <Truck />,
    },
    {
      title: "Order Complete",
      description: "Payment processed and order completed",
      icon: <CheckCircle />,
    },
  ];

  // Function to determine current step for order flow visualization
  const getCurrentStep = (status) => {
    switch (status) {
      case "Scheduled":
        return 0;
      case "In Transit":
        return 1;
      case "In Progress":
        return 2;
      case "Out for Delivery":
        return 3;
      case "Delivered":
        return 4;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Order Management</h1>
        <p className="text-gray-600">View and manage all customer orders</p>
      </div>

      {!showOrderDetail ? (
        <>
          {/* Order filtering and search */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">View:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    className={`px-3 py-1 text-sm rounded-md transition ${
                      activeView === "all" ? "bg-white shadow" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveView("all")}
                  >
                    All Orders
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded-md transition ${
                      activeView === "active" ? "bg-white shadow" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveView("active")}
                  >
                    Active
                  </button>
                  <button
                    className={`px-3 py-1 text-sm rounded-md transition ${
                      activeView === "completed" ? "bg-white shadow" : "hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveView("completed")}
                  >
                    Completed
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                >
                  <option value="all">All Dates</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                </select>

                <select
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-1" />
                  More Filters
                </button>
              </div>
            </div>
          </div>

          {/* Orders table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{order.customer}</div>
                          <div className="text-xs text-gray-400">{order.address}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getStatusIcon(order.status)}
                            <span
                              className={`ml-2 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : order.status === "In Progress"
                                  ? "bg-blue-100 text-blue-800"
                                  : order.status === "Cancelled"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>{order.date}</div>
                          <div className="text-xs text-gray-400">{order.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.service}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            className="text-blue-600 hover:text-blue-900 mr-3"
                            onClick={() => handleViewOrder(order)}
                          >
                            View
                          </button>
                          <select
                            className="border border-gray-200 rounded px-2 py-1 text-xs"
                            onChange={(e) => handleStatusChange(order.id, e.target.value)}
                            value={order.status}
                          >
                            <option value="Scheduled">Scheduled</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancel</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                        No orders found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{filteredOrders.length}</span> of{" "}
                <span className="font-medium">{orderHistory.length}</span> orders
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Order Detail View */
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <button
              onClick={() => setShowOrderDetail(false)}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to All Orders
            </button>

            <div className="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedOrder.id}</h2>
                <p className="text-gray-600">
                  Order placed on {selectedOrder.date} at {selectedOrder.time}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    selectedOrder.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : selectedOrder.status === "In Progress"
                      ? "bg-blue-100 text-blue-800"
                      : selectedOrder.status === "Cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {getStatusIcon(selectedOrder.status)}
                  <span className="ml-2">{selectedOrder.status}</span>
                </div>
              </div>
            </div>

            {/* Order Flow Progress */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Order Progress</h3>
              <div className="relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200"></div>
                <div className="flex justify-between relative">
                  {orderFlowSteps.map((step, index) => {
                    const currentStep = getCurrentStep(selectedOrder.status);
                    const isCompleted = index <= currentStep;
                    const isCurrent = index === currentStep;

                    return (
                      <div key={index} className="flex flex-col items-center relative z-10">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            isCompleted ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"
                          } ${isCurrent ? "ring-4 ring-blue-100" : ""}`}
                        >
                          {step.icon}
                        </div>
                        <div className="text-xs font-medium mt-2 text-center">{step.title}</div>
                        <div className="text-xs text-gray-500 text-center max-w-xs">
                          {step.description}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Customer & Order Details in 2 column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Customer Information</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Name:</span>
                    <p className="font-medium">{selectedOrder.customer}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Address:</span>
                    <p className="font-medium">{selectedOrder.address}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Contact:</span>
                    <p className="font-medium">(555) 123-4567</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Customer Since:</span>
                    <p className="font-medium">March 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Order Details</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Service:</span>
                    <p className="font-medium">{selectedOrder.service}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Items:</span>
                    <p className="font-medium">8 items (4.5 lbs)</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Special Instructions:</span>
                    <p className="font-medium">Use fragrance-free detergent</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Amount:</span>
                    <p className="font-medium">{selectedOrder.amount}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Order Timeline</h3>
              <div className="border-l-2 border-gray-200 pl-4 ml-4 space-y-6">
                <div className="relative">
                  <div className="absolute -left-6 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                  <div className="text-sm font-medium">Order Created</div>
                  <div className="text-xs text-gray-500">
                    {selectedOrder.date} at {selectedOrder.time}
                  </div>
                  <div className="text-sm mt-1">Customer placed order through mobile app</div>
                </div>

                {selectedOrder.status !== "Scheduled" && (
                  <div className="relative">
                    <div className="absolute -left-6 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                    <div className="text-sm font-medium">Pickup Scheduled</div>
                    <div className="text-xs text-gray-500">
                      {selectedOrder.date} at{" "}
                      {new Date(`2025-04-22T${selectedOrder.time}`).getHours() +
                        1 +
                        ":" +
                        new Date(`2025-04-22T${selectedOrder.time}`).getMinutes()}
                    </div>
                    <div className="text-sm mt-1">Driver assigned for pickup</div>
                  </div>
                )}

                {(selectedOrder.status === "In Progress" ||
                  selectedOrder.status === "Delivered") && (
                  <div className="relative">
                    <div className="absolute -left-6 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                    <div className="text-sm font-medium">Processing Started</div>
                    <div className="text-xs text-gray-500">
                      {selectedOrder.date} at{" "}
                      {new Date(`2025-04-22T${selectedOrder.time}`).getHours() +
                        2 +
                        ":" +
                        new Date(`2025-04-22T${selectedOrder.time}`).getMinutes()}
                    </div>
                    <div className="text-sm mt-1">Items received and processing started</div>
                  </div>
                )}

                {selectedOrder.status === "Delivered" && (
                  <>
                    <div className="relative">
                      <div className="absolute -left-6 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                      <div className="text-sm font-medium">Ready for Delivery</div>
                      <div className="text-xs text-gray-500">
                        {selectedOrder.date} at{" "}
                        {new Date(`2025-04-22T${selectedOrder.time}`).getHours() +
                          4 +
                          ":" +
                          new Date(`2025-04-22T${selectedOrder.time}`).getMinutes()}
                      </div>
                      <div className="text-sm mt-1">
                        Processing complete, items ready for delivery
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-6 mt-1 h-4 w-4 rounded-full bg-green-600"></div>
                      <div className="text-sm font-medium">Delivered</div>
                      <div className="text-xs text-gray-500">
                        {selectedOrder.date} at{" "}
                        {new Date(`2025-04-22T${selectedOrder.time}`).getHours() +
                          5 +
                          ":" +
                          new Date(`2025-04-22T${selectedOrder.time}`).getMinutes()}
                      </div>
                      <div className="text-sm mt-1">Items delivered to customer</div>
                    </div>
                  </>
                )}

                {selectedOrder.status === "Cancelled" && (
                  <div className="relative">
                    <div className="absolute -left-6 mt-1 h-4 w-4 rounded-full bg-red-600"></div>
                    <div className="text-sm font-medium">Order Cancelled</div>
                    <div className="text-xs text-gray-500">
                      {selectedOrder.date} at{" "}
                      {new Date(`2025-04-22T${selectedOrder.time}`).getHours() +
                        1 +
                        ":" +
                        new Date(`2025-04-22T${selectedOrder.time}`).getMinutes()}
                    </div>
                    <div className="text-sm mt-1">Customer cancelled the order</div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-end mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Print Receipt
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Contact Customer
              </button>
              {selectedOrder.status !== "Delivered" && selectedOrder.status !== "Cancelled" && (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Update Status
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
