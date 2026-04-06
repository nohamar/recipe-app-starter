import { supabase } from "../lib/supabaseClient";

// Upload image
export function uploadImage(userId: string, file: File) {
  const filePath = `${userId}/${Date.now()}-${file.name}`;
  return supabase.storage
    .from("recipe-images")
    .upload(filePath, file);
}

// Get signed URL (for private bucket)
export function getImageUrl(path: string) {
  return supabase.storage
    .from("recipe-images")
    .getPublicUrl(path);
}

// Delete image
export function deleteImage(path: string) {
  return supabase.storage
    .from("recipe-images")
    .remove([path]);
}