import useSupabase from './useSupabase'

export function useHours() {
  const { supabase } = useSupabase()

  const listHours = async () => {
    const { data, error } = await supabase
      .from('hours')
      .select('*')
      .order('created_at', { ascending: true })
    if (error) throw error

    return data
  }

  const createHourRegistry = async (hourValue) => {
    const { data, error } = await supabase.from('hours').insert([{ value: hourValue }])
    if (error) throw error

    return data
  }

  return {
    listHours,
    createHourRegistry,
  }
}
