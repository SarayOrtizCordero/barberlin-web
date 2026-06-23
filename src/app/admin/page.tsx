import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminDashboard } from "./AdminDashboard";

export default function AdminPage() {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
}
