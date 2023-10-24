import useSupabase from './useSupabase'

export function useViews() {
  const { supabase } = useSupabase()

  const listViews = async () => {
    const { data, error } = await supabase
      .from('views')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) throw error

    return data
  }

  const createViewRegistry = async (viewsValue) => {
    const { data, error } = await supabase.from('views').insert([{ value: viewsValue }])
    if (error) throw error

    return data
  }

  return {
    listViews,
    createViewRegistry,
  }
}
