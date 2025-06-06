type StatCardProps = {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
};

export function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex items-center gap-4">
      {icon && <div className="text-blue-500">{icon}</div>}
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}
