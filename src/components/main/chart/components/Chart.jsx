import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useChartContext } from "@/context/chart-context"
import { useUsersContext } from "@/context/users-context"
import { Check, X } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartConfig = {
  ed: {
    label: "Спад энергии",
    color: "hsl(var(--ed))",
  },
  eat: {
    label: "Приём пищи",
    color: "hsl(var(--eat))",
  },
  brain: {
    label: "Мозг активность",
    color: "hsl(var(--brain))",
  },
  sleep: {
    label: "Сон",
    color: "hsl(var(--sleep))",
  },
  exercise: {
    label: "Физ активность",
    color: "hsl(var(--exercise))",
  },
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-sm min-w-[200px]">
        <div className="text-sm font-medium mb-2 pb-1 border-b">
          {label.toString().padStart(2, '0')}:00
        </div>

        <div className="space-y-2">
          {payload.map((entry, index) => {
            const isActive = entry.value >= 1
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full"
                       style={{ backgroundColor: entry.color || entry.stroke }} />
                  <span className="text-xs text-muted-foreground">
                    {chartConfig[entry.dataKey]?.label || entry.dataKey}:
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {isActive ? (
                    <Check className="h-3.5 w-3.5 text-green-400" />
                  ) : (
                    <X className="h-3.5 w-3.5 text-red-400" />
                  )}
                  <span className={`text-xs font-medium ${isActive ? 'text-green-400' : 'text-red-400'}`}>
                    {isActive ? 'Активно' : 'Не активно'}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return null
}

export default function Chart() {
    const { currentUser } = useChartContext()
    const { users } = useUsersContext()

    // if (!currentUser.id) {
    //     return console.log("No charts")
    // }

    // if (currentUser.charts?.length === 0
    //     || !currentUser.charts?.[0]?.chart?.length === 0) {
    //     return console.log("No charts")
    // }

    const chartData = currentUser?.charts?.[0]?.chart
            || users?.[0]?.currentUser?.charts?.[0]?.chart
            || null

    if (!chartData) {
        return (
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Почасовая статистика - {currentUser.unique_name}</CardTitle>
                    <CardDescription>
                        Отслеживание энергии, питания, сна и активности
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[400px] w-full">
                        <div className="text-center text-muted-foreground">
                            Нет данных
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Почасовая статистика - {currentUser.first_name} {currentUser.last_name}
                </CardTitle>
                <CardDescription>
                    Отслеживание энергии, питания, сна и активности
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="h-[400px] w-full"
                >
                    <AreaChart
                        // data={currentUser?.charts[0]?.chart}
                        data={chartData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        stackOffset="none"
                    >
                        <defs>
                            <linearGradient  id="fillSleep" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-sleep)"
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-sleep)"
                                    stopOpacity={0.05}
                                />
                            </linearGradient >

                            <linearGradient  id="fillBrain" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-brain)"
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-brain)"
                                    stopOpacity={0.05}
                                />
                            </linearGradient >

                            <linearGradient  id="fillExercise" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-exercise)"
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-exercise)"
                                    stopOpacity={0.05}
                                />
                            </linearGradient >

                            <linearGradient  id="fillEat" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-eat)"
                                    stopOpacity={0.3}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-eat)"
                                    stopOpacity={0.05}
                                />
                            </linearGradient >

                            <linearGradient  id="fillEd" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-ed)"
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-ed)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient >
                        </defs>

                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="3 3"
                            stroke="#333333" // Серый цвет для сетки
                        />

                        <XAxis
                            dataKey="hour"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `${value.toString().padStart(2, '0')}:00`}
                            stroke="#666666"
                        />

                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            stroke="#666666"
                            domain={[0, 1.2]} // Фиксируем диапазон для бинарных данных
                            ticks={[0, 1]} // Показываем только 0 и 1
                            tickFormatter={(value) => value === 1 ? "Активно" : "Не активно"}
                        />

                        <ChartTooltip
                            cursor={{ stroke: '#666666', strokeWidth: 1 }}
                            content={<CustomTooltip />}
                        />

                        <Area
                            dataKey="sleep"
                            type="basis"
                            fill="url(#fillSleep)"
                            stroke="var(--color-sleep)"
                            strokeWidth={2}
                            fillOpacity={1}
                            activeDot={{ r: 4, fill: "var(--color-sleep)" }}
                            stackId="1"
                            connectNulls={true}
                            isAnimationActive={true}
                            animationDuration={300}
                        />

                        <Area
                            dataKey="brain"
                            type="basis"
                            fill="url(#fillBrain)"
                            stroke="var(--color-brain)"
                            strokeWidth={2}
                            fillOpacity={1}
                            activeDot={{ r: 4, fill: "var(--color-brain)" }}
                            stackId="2"
                            connectNulls={true}
                            isAnimationActive={true}
                            animationDuration={300}
                        />

                        <Area
                            dataKey="exercise"
                            type="basis"
                            fill="url(#fillExercise)"
                            stroke="var(--color-exercise)"
                            strokeWidth={2}
                            fillOpacity={1}
                            activeDot={{ r: 4, fill: "var(--color-exercise)" }}
                            stackId="3"
                            connectNulls={true}
                            isAnimationActive={true}
                            animationDuration={300}
                        />

                        <Area
                            dataKey="eat"
                            type="basis"
                            fill="url(#fillEat)"
                            stroke="var(--color-eat)"
                            strokeWidth={2}
                            fillOpacity={1}
                            activeDot={{ r: 4, fill: "var(--color-eat)" }}
                            stackId="4"
                            connectNulls={true}
                            isAnimationActive={true}
                            animationDuration={300}
                        />

                        <Area
                            dataKey="ed"
                            type="basis"
                            fill="url(#fillEd)"
                            stroke="var(--color-ed)"
                            strokeWidth={2}
                            fillOpacity={1}
                            activeDot={{ r: 4, fill: "var(--color-ed)" }}
                            stackId="5"
                            connectNulls={true}
                            isAnimationActive={true}
                            animationDuration={300}
                        />

                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}