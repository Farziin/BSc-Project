export default (scenario, conditions) => {
  var code = ''
  // define states
  var states = 'states = ['
  for (let index = 1; index < scenario.number_of_states; index++) {
    states += ('"state' + index + '", ')
  }
  states += ('"state' + scenario.number_of_states + '"]\n')
  code += states

  // define start and finish state
  code += ('current_state = "state' + conditions.startState + '"\n')
  code += ('finish_state = "state' + conditions.finishState + '"\n')

  code += 'iteration = 1\n'

  // while loop
  code += 'while current_state != finish_state:\n'
  code += '\tprint("Iteration is: " + str(iteration))\n'
  code += '\tprint("CURRENT STATE IS: " + current_state)\n'
  // define test conditions
  conditions.forEach(condition => {
    code += '\tif iteration == ' + condition.timeOfChange + ':\n'
    code += ('\t\t' + condition.selectedSensor + ' = ' + condition.sensorValue + '\n')
  })

  code += '\tif current_state == "state1":\n'

  // define state event and actions
  scenario['scenario']['state1'].forEach(element => {
    code += '\t\tif ' + element['event'] + ':\n'
    code += '\t\t\t' + element['action'] + '\n'
    code += '\t\t\t' + 'current_state = "' + element['go_to_state'] + '"\n'
  })

  for (let index = 2; index <= scenario.number_of_states; index++) {
    code += '\telif current_state == "state' + index + '":\n'
    scenario['scenario']['state' + index].forEach(element => {
      code += '\t\tif ' + element['event'] + ':\n'
      code += '\t\t\t' + element['action'] + '\n'
      code += '\t\t\t' + 'current_state = "' + element['go_to_state'] + '"\n'
    })
  }

  scenario.things.forEach(thing => {
    if (thing.type === 'sensor') {
      code += '\tprint("Value of ' + thing.name + ' is: " + str(' + thing.name + '))\n'
    }
  })
  code += '\titeration += 1\n'
  code += '\tprint("****************************")\n'

  return code
}
