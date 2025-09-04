interface LoadingProps {
  size?: "sm" | "md" | "lg";
  message?: string;
  className?: string;
}

export default function Loading({ 
  size = "md", 
  message = "Loading...", 
  className = "" 
}: LoadingProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-12 w-12", 
    lg: "h-16 w-16"
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${className}`}>
      <div className="text-center">
        <div className={`animate-spin rounded-full border-b-2 border-purple-600 mx-auto mb-4 ${sizeClasses[size]}`}></div>
        <p className="text-gray-600 text-lg">{message}</p>
      </div>
    </div>
  );
}